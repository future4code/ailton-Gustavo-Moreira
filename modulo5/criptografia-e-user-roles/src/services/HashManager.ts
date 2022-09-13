import * as bcryptjs from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class HashManager {

    async hashDaSenha(password: string): Promise<string> {

        const cost = Number(process.env.COST);
        const salt = await bcryptjs.genSalt(cost);
        const hash = await bcryptjs.hash(password, salt)
        return hash
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return bcryptjs.compare(password, hash)
    }
}
