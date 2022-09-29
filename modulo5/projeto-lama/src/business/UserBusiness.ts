import { UserDatabase } from "../database/UserDatabase"
import { IinputSignupDTO, IpayloadDTO, IsignupOutPutDTO, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import {ParamsError} from "../errors/ParamsError"
import { ConflictError } from "../errors/ConflictError"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: IinputSignupDTO) =>{
        const {name, email, password} = input

        if(typeof name !== "string"){
            throw new ParamsError("Nome inválido")
        }
        if(typeof email !== "string"){
            throw new ParamsError("Email inválido")
        }
        if(typeof password !== "string"){
            throw new ParamsError("Senha inválido")
        }
        if(name.length < 3){
            throw new ParamsError("Nome deve possuir ao menos 3 caracteres")
        }
        if(password.length < 6){
            throw new ParamsError("Senha deve possuir ao menos 6 caracteres")
        }
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Email inválido")
        }
        
        const emailAlreadyExist = await this.userDatabase.findByEmail(email)
        if(emailAlreadyExist){
            throw new ConflictError("Email já cadastrado")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User (id, name, email, hashedPassword, USER_ROLES.NORMAL)

        await this.userDatabase.createUser(user)

        const payload: IpayloadDTO = {
            id: user.getId(),
            role: user.getRole()
        }
      
        
        const token =  this.authenticator.generateToken(payload)

        const response: IsignupOutPutDTO = {
            message: "Cadastro realizado com sucesso!", token
        }

        return response

    }
}