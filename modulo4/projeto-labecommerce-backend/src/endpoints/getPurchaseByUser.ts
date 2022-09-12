import { Request, Response } from "express"
import selectPurchasesByUser from "../data/selectPurchasesByUser"
import selectUser from "../data/selectUser"

export default async function getPurchaseByUser (req: Request, res: Response) {
    try {
        
        const userId = req.params.user_id

        const userExist = await selectUser(userId)

        if(!userExist){
            throw new Error("Usuario não encontrado")
        }

        const allPurchase = await selectPurchasesByUser(userId)

        if(!allPurchase?.compras.length){
            throw new Error(`pessoa não realizaou nenhuma compra`)
        }

        res.status(200).send(allPurchase)

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}