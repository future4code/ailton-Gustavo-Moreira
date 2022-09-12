import { userInfo } from "../types";
import { connection } from "./connection";

//funcao para poder tipar os usuarios selecionados
const typeUser = (user:any) =>{
    const createUser: userInfo = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
    }
    return createUser
}

export default async function selectUsers():Promise<userInfo[] | undefined> {
    const result = await connection("labecommerce_users")

    const allUserType = result.map((user) => {
        return typeUser(user)
    })
    // console.log(allUserType)
    return allUserType
}