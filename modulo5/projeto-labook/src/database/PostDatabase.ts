import { IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public create = async (post: Post) =>{
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(postDB)
    }

    public getByID = async (id:string) =>{
        const postDB = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select("*")
        .where({id})

        return postDB[0]
    }

    public getAll = async () =>{
        const postDB = await BaseDatabase.connection.raw(`
        SELECT Labook_Posts.id, Labook_Posts.content, Labook_Posts.user_id, count(Labook_Likes.user_id) as total_like
        FROM Labook_Likes
        inner join Labook_Posts on Labook_Posts.id = Labook_Likes.post_id
        group by  Labook_Likes.post_id;`)

        return postDB
    }

}