import { UserDatabase } from "../database/UserDatabase"
import { EmailExist } from "../errors/EmailExist"
import { MissinFields } from "../errors/MissinFields"
import { ParamsError } from "../errors/ParamsError"
import { InputSignupDTO, ItokenAuth, User, USER_ROLES, InputLoginDTO } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: InputSignupDTO) =>{
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password){
            throw new MissinFields()
        }

        if (typeof name !== "string" || name.length < 3)  {
            throw new ParamsError()
        }

        if (typeof password !== "string" || password.length < 6)  {
            throw new ParamsError()
        }

        if (typeof email !== "string" || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))  {
            throw new ParamsError()
        }


        const userDB = await this.userDatabase.userByEmail(email)
        
        if (userDB){
            throw new EmailExist()
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(id)

        const user = new User(
            id, name, email, hashedPassword, USER_ROLES.ADMIN
        )

        await this.userDatabase.createUser(user)

        const tokenAuth: ItokenAuth = {
            id: user.getId(),
            role: user.getRole()
        }

        const token =  this.authenticator.generateToken(tokenAuth)

        const response = {message: "Usuario Cadastrado com Sucesso!" , token}

        return response
    }

    public login = async (input:InputLoginDTO ) => {
        
        const email = input.email
        const password = input.password

        if (!email || !password){
            throw new MissinFields()
        }

        if (typeof password !== "string" || password.length < 6)  {
            throw new ParamsError()
        }

        if (typeof email !== "string" || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))  {
            throw new ParamsError()
        }

        const userDB = await this.userDatabase.userByEmail(email)
        
        if (!userDB){
            throw new Error("Usuário não existe")
        }

        const user = new User (
            userDB.id, 
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const correctPassword = await this.hashManager.compare(password, user.getPassword())
        
        // if (!correctPassword){
        //     throw new Error("Senha incorreto")
        // }

        const tokenAuth: ItokenAuth = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(tokenAuth)

        const response = {message:"Usuario logado", token}

        return response
    }
}
