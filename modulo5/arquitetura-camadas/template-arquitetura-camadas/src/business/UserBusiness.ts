import { User, UserDTO } from "../models/User";
import { USER_ROLES } from "../models/User";
import { UserDatabase } from "../database/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
    async create(userDTO: UserDTO) : Promise <string>{
        const {name, email, password, role} = userDTO

        if (!name || !email || !password || !role) {
            throw new Error("Todos os campos deverão ser preenchidos")
        }

        if (role.toUpperCase() !== USER_ROLES.ADMIN && role.toUpperCase() !== USER_ROLES.NORMAL) {
            throw new Error("Tipo errado")
        }

        if (password.length < 6) {
            throw new Error("Senha tem que ter mais de 6 digitos")
        }

        const userDB = new UserDatabase()

        const verifyEmail = await userDB.getUserByEmail(email)

        if (verifyEmail) {
            throw new Error("Email já existe")
        }

        const id = new IdGenerator().generate()
            
        const hashPassword = await new HashManager().hash(password)
          
        const user = new User(id, name, email, hashPassword, role)

        const response = await userDB.createUser(user)

        const token = new Authenticator().generateToken({id, role})

        // console.log(user)

        return token
           
    }
}