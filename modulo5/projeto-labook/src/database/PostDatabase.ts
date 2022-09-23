import { IPostDB, IPostLikeDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public postModelLike = async (post: Post)=>{
        const postLikeDB: IPostLikeDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
            likes: post.getLikes()
        }

        return postLikeDB
    }

    public create = async (post: Post) =>{
        const postDB = this.toPostDBModel(post)

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

    public getByID = async (id:string) =>{
        const postDB = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select("*")
        .where({id})

        return postDB[0]
    }

    public getPosts = async () => {
        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()

        return postsDB
    }

    public getLikes = async (postId: string) => {
        const result: any = await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .count("id AS likes")
            .where({ post_id: postId })

        return result[0].likes as number
    }

    public findById = async (postId: string) =>{
        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id: postId })

        return postsDB[0]
    }

    public delete = async (id:string) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .delete()
        .where({id})

        const response = {
            message: "Post deletado"
        }

        return response
    }


}