
import { productInfo } from "../types";
import { connection } from "./connection";

//funcao para poder tipar os usuarios selecionados
const typeProduct = (product:any) =>{
    const createProduct: productInfo = {
        id: product.id,
        name: product.name,
        price: product.email,
        image_url: product.image_url
    }
    return createProduct
}

export default async function selectProducts():Promise<productInfo[] | undefined> {
    const result = await connection("labecommerce_products")

    const allProductType = result.map((product) => {
        return typeProduct(product)
    })
    // console.log(allUserType)
    return allProductType
}