import { Request, Response } from "express";
import { UserDataBase } from "../data/userDataBase";
import { EmailExist } from "../error/EmailExist";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

class UserEndpoint{

    public async creatUser(req:Request, res: Response) {
    try {

        const {email, password} = req.body

        if(!email || !password){
            throw new MissingFields()
        }

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email invalido");
          }

          if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Password inválido. Precisa ter mais de 6 caracteres");
          }
    
        const userDB = new UserDataBase

        const verifyEmail = await userDB.getUserByEmail(email)

        if(verifyEmail.length){
            throw new EmailExist()
        }


        const id = new GenerateId().createId()

        const user = new User(id, email, password)

       await userDB.creatUser(user)

       const token = new Authenticator().generateToken(id)

       console.log(user)

       res.status(201).send({message: "Usuario cadastrado com sucesso", token})
        
        
    } catch (error:any) {
        res.status(500).send({message: error.message})
     }
    }

    async login(req: Request, res: Response){
        try {
            const {email, password} = req.body

            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Email invalido");
              }

            const userDB = new UserDataBase
            const user = await userDB.getUserByEmail(email)

            console.log(user)
            if(user[0].password !== password){
                throw new Error("Senha incorreta")
            }
          

            const token = new Authenticator().generateToken(user[0].id)
            
            res.status(200).send({token})
            
        } catch (error:any) {
            res.status(500).send({message: error.message})
         }
    }

    async getUser(req: Request, res: Response){
        try {
            const {token} = req.body

            const authentication = new Authenticator().verifyToken(token)
            const user = new UserDataBase().getUserById(authentication[0].id)

            console.log({user})

            res.status(200).send({user})
            
        } catch (error:any) {
            res.status(500).send({message: error.message})
        }
    }
} 
export default UserEndpoint