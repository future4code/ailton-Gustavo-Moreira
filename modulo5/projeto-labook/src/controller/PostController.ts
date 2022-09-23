import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { inputPostCreate } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public create = async (req: Request, res: Response) =>{
        try {

            const input: inputPostCreate = {
                content: req.body.content
            }

            const token = req.headers.authorization as string

            const response = await this.postBusiness.create(input, token)

            res.status(201).send(response)
            
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getAll = async (req: Request, res: Response) =>{

        try {
            const token = req.headers.authorization as string
            const response = await this.postBusiness.getAll(token)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

}