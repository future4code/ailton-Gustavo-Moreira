import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { IInputProductDTO } from "../models/Product";


export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public getProduct = async (req: Request, res: Response) => {
        try {

            const response = await this.productBusiness.getPosts()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    // public deletePost = async (req: Request, res: Response) => {
    //     try {
    //         const input: IDeletePostInputDTO = {
    //             token: req.headers.authorization as string,
    //             postId: req.params.id
    //         }

    //         const response = await this.postBusiness.deletePost(input)
    //         res.status(200).send(response)
    //     } catch (error) {
    //         console.log(error)
    //         if (error instanceof BaseError) {
    //             return res.status(error.statusCode).send({ message: error.message })
    //         }
    //         res.status(500).send({ message: "Erro inesperado" })
    //     }
    // }

}