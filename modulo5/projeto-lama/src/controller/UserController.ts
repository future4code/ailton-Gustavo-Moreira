import { Request, response, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../database/BaseDatabase";
import { BaseError } from "../errors/BaseError";
import { IinputLoginDTO, IinputSignupDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}
     
    public signup = async(req: Request, res: Response) =>{
        try {
            const input: IinputSignupDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(input)
            
            res.status(201).send(response)

        } catch (error) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }
            res.status(500).send({message:"Erro inesperado"})
        }
    }

    public login = async (req: Request, res: Response) =>{
        try {
            const input: IinputLoginDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)
            res.status(201).send(response)
            
        } catch (error) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }
            res.status(500).send({message:"Erro inesperado"})
        }
    }

}