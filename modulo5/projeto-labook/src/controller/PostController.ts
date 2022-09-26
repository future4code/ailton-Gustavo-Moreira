import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { IGetPostsInputDTO, inputDeleteDTO, inputLikeDTO, inputPostCreate } from "../models/Post";

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

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: IGetPostsInputDTO = {
                token: req.headers.authorization as string
            }

            const response = await this.postBusiness.getPosts(input)
            res.status(200).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public delete = async (req: Request, res: Response) =>{

        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            const input: inputDeleteDTO ={token, id: id}

            const response = await this.postBusiness.delete(input)

            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public addLike = async (req: Request, res: Response) =>{
        try {

            const token = req.headers.authorization as string
            const postId = req.params.id

            const input: inputLikeDTO ={token, postId: postId}

            const response = await this.postBusiness.addLike(input)

            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(400).send({ message: error.message })
            
        }
    }

    public desLike = async (req: Request, res: Response) =>{
        try {

            const token = req.headers.authorization as string
            const postId = req.params.id

            const input: inputLikeDTO ={token, postId: postId}

            const response = await this.postBusiness.desLike(input)

            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(400).send({ message: error.message })
            
        }
    }

}