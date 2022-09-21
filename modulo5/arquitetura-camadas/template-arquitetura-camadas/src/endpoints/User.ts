import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


class UserEndpoint{
    public async createUser(req: Request, res: Response){
        try {

            const {name, email, password, role} = req.body

            if (!name || !email || !password || !role) {
                throw new Error("Todos os campos deverão ser preenchidos")
            }

            if (role.toUpperCase() !== USER_ROLES.ADMIN && role.toUpperCase() !== USER_ROLES.NORMAL) {
                throw new Error("Tipo inválido")
            }
            
            if (password.length < 6) {
                throw new Error("Senha tem que ter mais de 6 digitos")
            }

            if (name.length < 3) {
                throw new Error("Nome tem que ter mais de 3 digitos")
            }

            const userDB = new UserDatabase

            const verifyEMail = await userDB.getUserByEmail(email)

            const id = new IdGenerator().generate()

            const hashPassword = await new HashManager().hash(password)

            if (verifyEMail.getId()) {
                throw new Error("Email já existe")
            }else {
                const user = new User(id, name, email, hashPassword, role) 
                const response = await userDB.createUser(user)
                const token = new Authenticator().generateToken({ id, role })
                res.status(201).send({ message: response, token })
            }
            

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

}

export default UserEndpoint