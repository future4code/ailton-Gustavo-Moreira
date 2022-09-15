import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { EmailExist } from "../error/EmailExist";
import { MissingFields } from "../error/MissingFields";
import { WrongType } from "../error/WrongType";
import User from "../model/User";
import Authenticator, { typeUser } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class UserEndpoint {

    public async creatUser(req: Request, res: Response) {
        try {

            const { name, email, password, role } = req.body

            if (!name || !email || !password || !role) {
                throw new MissingFields()
            }

            if (role.toUpperCase() !== typeUser.ADMIN && role.toUpperCase() !== typeUser.NORMAL) {
                throw new WrongType()
            }

            if (password.length < 6) {
                throw new Error("Senha tem que ter mais de 6 digitos")
            }
            const userDB = new UserDataBase

            const verifyEmail = await userDB.getUserByEmail(email)
            
            const id = new GenerateId().createId()
            
            const hashPassword = await new HashManager().hashDaSenha(password)
            
            if (verifyEmail.getId()) {
                throw new EmailExist()
            }else {
                const user = new User(id, name, email, hashPassword, role) 
                const response = await userDB.creatUser(user)
                const token = new Authenticator().generateToken({ id, role })
                res.status(201).send({ message: response, token })
            }
            


        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Email invalido");
            }

            const userDB = new UserDataBase

            const user = await userDB.getUserByEmail(email)
            const correctPassword = await new HashManager().compare(password, user.getPassword())

            if (!correctPassword) {
                throw new Error("Senha inválida")
            }

            const token = new Authenticator().generateToken({id: user.getId(), role: user.getRole()})

            res.status(200).send({token})

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async profile(req: Request, res: Response){
        try {
            const token = req.headers.authorization as string

            const authentication = new Authenticator().verifyToken(token)
            const profile = await new UserDataBase().getUserById(authentication.id)

            res.status(200).send({profile})

        } catch (error:any) {
            res.status(500).send({message: error.message})
        }
    }

    async UserProfile(req: Request, res: Response){
        try {
            const {id} = req.params

            // const token = req.headers.authorization as string
            // const authentication = new Authenticator().verifyToken(token)

            // if(!authentication){
            //     throw new Error("Não autorizado")
            // }
            const userProfile = await new UserDataBase().getUserById(id)

            res.status(200).send({userProfile})

        } catch (error:any) {
            res.status(500).send({message: error.message})
        }
    }
}
export default UserEndpoint