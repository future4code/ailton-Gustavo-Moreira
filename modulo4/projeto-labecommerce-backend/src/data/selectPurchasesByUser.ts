import { allPurchase, PurchasesByUser } from "../types";
import { connection } from "./connection";

export default async function selectPurchasesByUser (userId: string): Promise <PurchasesByUser | undefined> {

    const result = await connection.raw(`
    select labecommerce_users.name as NomePessoa, labecommerce_products.name as Produto, labecommerce_products.price as Preco, labecommerce_purchases.id as IDdaCompra, labecommerce_purchases.quantity as Quantidade, labecommerce_purchases.total_price as PrecoTotal
    from labecommerce_purchases
    inner join labecommerce_users
    on
    labecommerce_purchases.user_id = labecommerce_users.id
    inner join labecommerce_products
    on
    labecommerce_purchases.product_id = labecommerce_products.id
    where labecommerce_users.id = "${userId}";
    `)

    let infoPerson: any = {}
    let allPurchase: allPurchase [] = []

    result[0].map((person: any) =>{
        infoPerson = {
            NomePessoa: person.NomePessoa   
        }
        allPurchase.push({
            IdCompra: person.IDdaCompra,
            NomeProduto: person.Produto,
            Preco: person.Preco,
            Quantidade: person.Quantidade,
            PrecoTotal: person.PrecoTotal
        })
    })

   const allPurchaseByUser : PurchasesByUser ={
    NomePessoa: infoPerson.NomePessoa,
    compras: allPurchase
   }

    return allPurchaseByUser
}