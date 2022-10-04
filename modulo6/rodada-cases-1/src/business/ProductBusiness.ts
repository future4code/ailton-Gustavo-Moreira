import { ProductDatabase } from "../database/ProductDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { AuthorizationError } from "../errors/AuthorizationError"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { ICreateProductDTO, Product } from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        // private idGenerator: IdGenerator,
        // private authenticator: Authenticator
    ) {}

    
    public getPosts = async () => {
        
        const productDB = await this.productDatabase.getProduct()

        const products = productDB.map((product)=>{
            return new Product (
                product.produto_id,
                product.nome,
                product.tags
            )
        })
        
        
        for (let product of products){
            const productId: any = product.getId()
            const tagsDB = await this.productDatabase.getTags(productId)
            const mapTags = tagsDB.map((tags) =>{
                return tags.tags_tag
            })
            
            product.setTags(mapTags)
        }

        const mapSemRepetir = [...new Set(products)]


        console.log(products)
        const response = {Products:mapSemRepetir}
        return response
    }

    // public deletePost = async (input: IDeletePostInputDTO) => {
    //     const { token, postId } = input

    //     const payload = this.authenticator.getTokenPayload(token)

    //     if (!payload) {
    //         throw new AuthenticationError()
    //     }

    //     const postDB = await this.postDatabase.findPostById(postId)

    //     if (!postDB) {
    //         throw new NotFoundError("Post não encontrado")
    //     }

    //     if (payload.role === USER_ROLES.NORMAL) {
    //         if (postDB.user_id !== payload.id) {
    //             throw new AuthorizationError()
    //         }
    //     }

    //     await this.postDatabase.deletePost(postId)

    //     const response: IDeletePostOutputDTO = {
    //         message: "Post deletado com sucesso"
    //     }

    //     return response
    // }

}