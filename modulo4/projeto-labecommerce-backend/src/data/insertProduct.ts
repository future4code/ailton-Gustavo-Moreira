import { productInfo } from "../types";
import { connection } from "./connection";

export default async function insertProduct(product:productInfo): Promise<string> {
    const {id, name, price, image_url} = product

    await connection("labecommerce_products").insert({id, name, price, image_url})

    return `o produto ${name} foi cirado com sucesso`
}