class Following{
    constructor(
        private id: string,
        private user_id: string,
        private following_id: string
    ){}

    public getId(){
        return this.id
    }
    public getUserId(){
        return this.user_id
    }
    public getFollowingId(){
        return this.following_id
    }
}

export default Following