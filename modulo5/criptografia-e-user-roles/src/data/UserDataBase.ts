import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase{
    public async creatUser(user: User): Promise<string>{
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }).into("User_Autentificacao")

        return `Usuario ${user.getName()} cadastrado com sucesso`
    }

    public async getUserByEmail(email: string){
        const result = await this.getConnection().select("*").from("User_Autentificacao").where({email: email})
        return new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
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