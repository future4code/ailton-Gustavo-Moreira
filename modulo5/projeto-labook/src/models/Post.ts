export interface IPostDB {
    id: string,
    content: string,
    user_id: string
}

export interface IPostLikeDB {
    id: string,
    content: string,
    user_id: string
    likes: number
}

export interface ICreatePostInputDTO {
    token: string,
    content: string
}

export interface IGetPostsInputDTO {
    token: string
}

export interface IGetPostsOutputDTO {
    posts: Post[]
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface inputPostCreate {
    content: string
}

export interface inputDeleteDTO{
    token: string,
    id: string
}

export interface inputLikeDTO{
    token: string,
    postId: string
}

export interface postsOutput {
    posts: Post[]
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = () => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}
