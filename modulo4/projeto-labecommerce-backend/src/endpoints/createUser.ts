import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { userInfo, userType } from "../types";

export default async function createUser(req: Request, res: Response) {
    try {
        
        const {name, email, password}: userType = req.body

        if(!name){
            throw new Error("O campo Nome deve ser preenchido")
        }
        if(!email){
            throw new Error("O campo Email deve ser preenchido")
        }
        if(!password){
            throw new Error("O campo Senha deve ser preenchido")
        }

        const userInsert: userInfo = {
            id: Date.now().toString(),
            name,
            email,
            password
        }


        const result = await insertUser(userInsert)

        res.status(201).send({message: result})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
} 