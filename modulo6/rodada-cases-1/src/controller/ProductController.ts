import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { IInputIdDB } from "../models/Product";


export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public getProduct = async (req: Request, res: Response) => {
        try {
            const response = await this.productBusiness.getProduct()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getProductById = async (req: Request, res: Response) => {
        try {
            const input : IInputIdDB  = {
                id: Number(req.params.id)
            }
            const response = await this.productBusiness.getProductById(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getProductByName = async (req: Request, res: Response) => {
        try {
            const input:any  = {
                name: req.query.name
            }
            const response = await this.productBusiness.getProductByName(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getProductByTag = async(req: Request, res: Response) =>{
        try {
            const input : any = {
                tags: req.query.tags
            }
            const response = await this.productBusiness.getProductByTag(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" }) 
        }
    }

    //Ativando o Migrations pela API
    public populate = async (req: Request, res: Response) =>{
        try {
            const response = await this.productBusiness.populate()
            res.status(201).send({message: "Até que fim deu boa"})
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }



}