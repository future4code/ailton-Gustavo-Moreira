import { BaseDatabase } from "./BaseDatabase"
import { User } from "../models/User"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public async createUser(user: User){
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }).into("Arq_Users")
        
        return `Usuário ${user.getName()} criado com sucesso`
    }

    public async getUserByEmail(email: string){
        const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_USERS)
        .where({email: email})  
        
        if(!result.length){
            return undefined
        }

        return new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }
}