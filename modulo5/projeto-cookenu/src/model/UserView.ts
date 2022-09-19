class UserView{
    constructor(
        private id: string,
        private name: string,
        private email: string,
    ){}

    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getEmail(){
        return this.email
    }
  
}

export default UserView