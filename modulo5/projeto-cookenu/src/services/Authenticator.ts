import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export enum typeUser {
    ADMIN ="ADMIN",
    NORMAL = "NORMAL"
}

interface UserSystem{
    id:string,
    role: typeUser
}

interface RecipeSystem{
    id:string
}

class Authenticator {
    generateToken(usuario: UserSystem){
        const token = jwt.sign(
            {usuario}, 
            process.env.JWT_KEY as string,
            {expiresIn: process.env.EXPIRES_IN}
        );
        return token
    }

    generateRecipeToken(recipe: RecipeSystem){
        const token = jwt.sign(
            {recipe}, 
            process.env.JWT_KEY as string,
            {expiresIn: process.env.EXPIRES_IN}
        );
        return token
    }

    verifyToken(token:string): UserSystem{
        const verify = jwt.verify(token, process.env.JWT_KEY as string) as any
        const retornaTipagem:UserSystem = verify.usuario

        return retornaTipagem
    }

}

export default Authenticator