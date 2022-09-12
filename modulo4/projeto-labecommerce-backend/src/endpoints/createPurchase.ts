import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProduct from "../data/selectProduct";
import selectUser from "../data/selectUser";
import { purchaseInfo } from "../types";

export default async function createPurchase (req: Request, res: Response) {
    try {
        const {user_id, product_id, quantity} = req.body

        if(!user_id){
            throw new Error("Por favor informar o ID do usuario")
        }
        if(!product_id){
            throw new Error("Por favor informar o ID do produto")
        }
        if(!quantity){
            throw new Error("Por favor informar a quantidade")
        }

        const userExist = await selectUser(user_id)

        if(!userExist){
            throw new Error("Usuario não encontrado")
        }

        const productExist = await selectProduct(product_id)

        if(!productExist){
            throw new Error("Produto não encontrado")
        }

        const purchase:purchaseInfo =  {
            id: Date.now().toString(),
            user_id,
            product_id,
            quantity,
            total_price: productExist.price * quantity
        }

        const result = await insertPurchase(purchase)

        res.status(201).send({message: result})
             
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}