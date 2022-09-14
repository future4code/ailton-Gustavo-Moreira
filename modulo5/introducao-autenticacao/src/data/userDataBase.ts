import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase{
    public async creatUser(user: User){
        await this.getConnection().insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        }).into("User_Autentificacao")
    }

    public async getUserByEmail(email: string){
        const result = await this.getConnection().select("*").from("User_Autentificacao").where({email: email})
        return result
    }

    public async getUserByPassword(password:string){
        const result = await this.getConnection().select("*").from("User_Autentificacao").where({password: password})
        return result
    }

    public async getUserById(id:string){
        const result = await this.getConnection().select("*").from("User_Autentificacao").where({id: id})
        return result
    }
    
}