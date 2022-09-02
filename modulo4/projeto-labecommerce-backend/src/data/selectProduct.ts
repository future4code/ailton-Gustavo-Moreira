
import { productInfo } from "../types";
import { connection } from "./connection";

export default async function selectProduct (productId: string): Promise <productInfo | undefined>{
    const [result] = await connection("labecommerce_products").select("*").where({id:productId})

    if(result){
        const productType: productInfo = {
            id: result.id,
            name: result.name,
            price: result.price,
            image_url: result.image_url
        }
        return productType
    }else{
        return undefined
    }
    
    
}