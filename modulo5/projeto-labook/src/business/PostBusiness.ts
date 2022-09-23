import { PostDatabase } from "../database/PostDatabase"
import { inputPostCreate, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { UserDatabase } from "../database/UserDatabase"

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

    public getAll = async (tokens: string) =>{
        const token = tokens

        if (!token){
            throw new Error("Não autorizado")
        }
        
        const allPosts = await this.postDatabase.getAll()
        return allPosts
    }
    

}