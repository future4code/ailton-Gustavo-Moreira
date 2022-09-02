import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { productInfo, productType } from "../types";

export default async function createProduct(req: Request, res: Response) {
    try {
        const {name, price, image_url}: productType = req.body
        
        if(!name){
            throw new Error("O campo Nome deve ser preenchido")
        }
        if(!price){
            throw new Error("O campo Preço deve ser preenchido")
        }
        if(!image_url){
            throw new Error("O campo Imagem deve ser preenchido")
        }

        const productInsert: productInfo = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const result = await insertProduct(productInsert)

        res.status(201).send({message: result})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}