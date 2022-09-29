import { BaseDatabase } from "./BaseDatabase"
import {User, IUserDB} from "../models/User"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"

    public userBDModel = (user: User):IUserDB =>{
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        return userDB
    }

    public createUser = async (user: User): Promise<void> =>{
        const userDB = this.userBDModel(user)

        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
    }

    
    public findByEmail = async (email: string): Promise<IUserDB | undefined>  =>{
        const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({email})

        return result[0]
    }

}