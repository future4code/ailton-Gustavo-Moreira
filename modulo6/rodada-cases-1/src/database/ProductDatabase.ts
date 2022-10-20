import { Product } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "CASE_AMARO_produto"
    public static TABLE_TAGS = "CASE_AMARO_tags"
    public static TABLE_ALL = "CASE_AMARO_produto_tags"

    public getProduct = async (): Promise<Product[]> => {
        const productDB = await BaseDatabase.connection
        .raw(`select CASE_AMARO_produto_tags.id, CASE_AMARO_produto.name, CASE_AMARO_tags.tags from CASE_AMARO_produto_tags
        inner join CASE_AMARO_produto 
        on CASE_AMARO_produto.id = CASE_AMARO_produto_tags.id
        inner join CASE_AMARO_tags 
        on CASE_AMARO_tags.tags = CASE_AMARO_produto_tags.tags`)
        
        const products = productDB[0].map((product: any)=>{
            return  new Product (
                product.id,
                product.name
            )                
        })
        
        return products
    }

    public getTags = async (productID: number): Promise<any[]> => {
        const result: any[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_ALL)
            .select()
            .where({ id: productID })

        return result
    } 

    public getProductById = async (productID: number): Promise<Product[]> => {
        const productDB = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({ id: productID })
        
        return productDB[0].name
    }

    public getProductByName = async (name: string): Promise<Product[]> => {
        const productDB = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .whereLike("name", `%${name}%`)
        
        const products = productDB.map((product: any)=>{
            return  new Product (
                product.id,
                product.name
            )                
        })
        return products
    }

    public getProductByTag = async (tag: string): Promise<any> =>{
        const productDB = await BaseDatabase.connection
        .raw(`
        select CASE_AMARO_produto_tags.id, CASE_AMARO_produto.name, CASE_AMARO_produto_tags.tags from CASE_AMARO_produto_tags
        inner join CASE_AMARO_produto 
        on CASE_AMARO_produto.id = CASE_AMARO_produto_tags.id
        inner join CASE_AMARO_tags 
        on CASE_AMARO_tags.tags = CASE_AMARO_produto_tags.tags
        where CASE_AMARO_produto_tags.tags = "${tag}";`)

        const products = productDB[0].map((product: any)=>{
            return  new Product (
                product.id,
                product.name
            )                
        })
        
        return products
    }
}