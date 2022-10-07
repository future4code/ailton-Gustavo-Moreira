import { BaseDatabase } from "../../src/database/BaseDatabase"
import { Product } from "../../src/models/Product"


export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "CASE_AMARO_produto"
    public static TABLE_TAGS = "CASE_AMARO_tags"
    public static TABLE_ALL = "CASE_AMARO_produto_tags"

    
    public getProduct = async (): Promise<Product[]> => {
       
        const product: any = [
        {
            id: 8371,
            name: "VESTIDO TRICOT CHEVRON",
            tags: ["balada", "neutro", "delicado", "festa"]
          }
        ]
        
        const products = product[0].map((product: any)=>{
            return  new Product (
                product.id,
                product.name
            )                
        })
        
        return products
    }

    public getTags = async (productID: number): Promise<any[]> => {
        if (productID == 8371){
            return [
                 { id: 8371, tags: 'balada' },
                 { id: 8371, tags: 'neutro' },
                 { id: 8371, tags: 'delicado' },
                 { id: 8371, tags: 'festa' }
              ]
        }
        return []
    } 

    public getProductById = async (productID: number): Promise<any | undefined> => {
        switch(productID) {
            case 8371:
                return {
                    id: 8371,
                    name: "VESTIDO TRICOT CHEVRON",
                    tags: ["balada", "neutro", "delicado", "festa"]
                }

            default:
                return undefined
        }
    }

    public getProductByName = async (name: string): Promise<any | undefined> => {
        switch(name) {
            case "VESTIDO TRICOT CHEVRON":
                return {
                    id: 8371,
                    name: "VESTIDO TRICOT CHEVRON",
                    tags: ["balada", "neutro", "delicado", "festa"]
                }

            default:
                return undefined
        }
    }

    public getProductByTag = async (tag: string): Promise<any> =>{
        
    }

}