import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User, UserDTO } from "../models/User"

export class UserController {
    async create(req: Request, res: Response){

    try {
            const {name, email, password, role} = req.body
            
            const userBusiness = new UserBusiness()

            const user: UserDTO = { name, email, password, role}

            const token = await userBusiness.create(user)


            res.status(201).send({message: token})

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
        
    }
}