import { BaseDatabase } from "../database/BaseDatabase"
import { User } from "../models/User"

export class UserController extends BaseDatabase {
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
}