import { PostDatabase } from "../database/PostDatabase"
import { IGetPostsInputDTO, IGetPostsOutputDTO, inputDeleteDTO, inputPostCreate, IPostLikeDB, Post, postsOutput } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { UserDatabase } from "../database/UserDatabase"
import { USER_ROLES } from "../models/User"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public create = async (input: inputPostCreate, tokens: string) =>{
        const content = input.content
        const token = tokens

        if (!content){
            throw new Error("O campo conteúdo deve ser preenchido")
        }

        if (!token){
            throw new Error("Não autorizado")
        }
        const id = this.idGenerator.generate()
        //pegar usuario
        const authentication = this.authenticator.getTokenPayload(token)
        const userId = authentication?.id as string


        const post = new Post (id, content, userId)
        
        await this.postDatabase.create(post)
        const response = {message: "Post criado com sucesso"}

        return response

    }

    public getPosts = async (input: IGetPostsInputDTO) => {
        const { token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Não autenticado")
        }

        const postsDB = await this.postDatabase.getPosts()

        const posts = postsDB.map(postDB => {
            return new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
            )
        })

        for (let post of posts) {
            const postId = post.getId()
            const likes = await this.postDatabase.getLikes(postId)
            post.setLikes(likes)
        }

        const response: IGetPostsOutputDTO = {
            posts
        }

        return response
    }

    public delete = async (input: inputDeleteDTO) =>{
        const {token, id} = input

        //validar token
        const validToken = this.authenticator.getTokenPayload(token)
        if(!validToken){
            throw new Error("Token inválido")
        }

        //achar o id do Post
        const postDB = await this.postDatabase.findById(id)
        if (!postDB){
            throw new Error("Post não existe")
        }

        if(validToken.role === USER_ROLES.NORMAL && postDB.user_id !== validToken.id){
            throw new Error("Voce nao tem permissao")
        }

        await this.postDatabase.delete(id)

        const response = {message: "Post deletado"}
        return response
    }

    
    

}