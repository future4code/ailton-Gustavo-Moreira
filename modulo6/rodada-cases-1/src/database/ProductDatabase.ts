import { IFullProductDB, IProductDB, ITagsDB, Product } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "CASE_AMARO_produto"
    public static TABLE_TAGS = "CASE_AMARO_tags"
    public static TABLE_ALL = "CASE_AMARO_produto_tags"


    public getProduct = async (): Promise<IFullProductDB[]> => {
        const productDB = await BaseDatabase.connection
        .raw(`select produto_id, nome, tags from CASE_AMARO_produto_tags
        inner join CASE_AMARO_produto 
        on CASE_AMARO_produto.id = CASE_AMARO_produto_tags.produto_id
        inner join CASE_AMARO_tags 
        on CASE_AMARO_tags.tags = CASE_AMARO_produto_tags.tags_tag`)
        return productDB[0]
    }

    public getTags = async (productID: number): Promise<any[]> => {
        const result: any[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_ALL)
            .select()
            .where({ produto_id: productID })

        return result
    } 


    // public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
    //     const postsDB: IPostDB[] = await BaseDatabase
    //         .connection(PostDatabase.TABLE_POSTS)
    //         .select()
    //         .where({ id: postId })

    //     return postsDB[0]
    // }

    // public deletePost = async (postId: string): Promise<void> => {
    //     await BaseDatabase
    //         .connection(PostDatabase.TABLE_POSTS)
    //         .delete()
    //         .where({ id: postId })
    // }

}