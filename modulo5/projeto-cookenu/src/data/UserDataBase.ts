
import Following from "../model/Following";
import User from "../model/User";
import UserView from "../model/UserView";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase{
    public async creatUser(user: User): Promise<string>{
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }).into("User_Cookenu")

        return `Usuario ${user.getName()} cadastrado com sucesso`
    }

    public async getUserByEmail(email: string){
        const result = await this.getConnection().select("*").from("User_Cookenu").where({email: email})
        // console.log(result)    
        return new User(result[0]?.id, result[0]?.name, result[0]?.email, result[0]?.password, result[0]?.role)
    }


    public async getUserByPassword(password:string){
        const result = await this.getConnection().select("*").from("User_Cookenu").where({password: password})
        return result
    }

    public async getUserById(id:string){
        const result = await this.getConnection().select("*").from("User_Cookenu").where({id: id})
        return new UserView(result[0].id, result[0].name, result[0].email)
    }

    public async fallowUser(user:Following): Promise<string>{
        await this.getConnection().insert({
            id:user.getId(),
            user_id: user.getUserId(),
            following_id: user.getFollowingId()
        }).into("Seguindo_Projeto_Cookenu")
        return `O Usuario ${user.getUserId()} está seguindo o Usuario ${user.getFollowingId()}`
    }

    public async getFollowById(id:string){
        const result = await this.getConnection().raw(`
        SELECT User_Cookenu.name 
        FROM Seguindo_Projeto_Cookenu 
        INNER JOIN User_Cookenu 
        ON Seguindo_Projeto_Cookenu.following_id = User_Cookenu.id 
        WHERE user_id = "${id}"`)
        return result[0]
    }

    public async getFeedById(id:string){
        const result = await this.getConnection().raw(`
        SELECT Receita_Cookenu.titulo, Receita_Cookenu.descricao, Receita_Cookenu.data_criacao, User_Cookenu.name 
        FROM Seguindo_Projeto_Cookenu 
        INNER JOIN User_Cookenu 
        ON Seguindo_Projeto_Cookenu.following_id = User_Cookenu.id 
        INNER JOIN Receita_Cookenu
        ON Seguindo_Projeto_Cookenu.following_id = Receita_Cookenu.user_id
        WHERE Seguindo_Projeto_Cookenu.user_id = "${id}"`)
        return result[0]
    }
    
}