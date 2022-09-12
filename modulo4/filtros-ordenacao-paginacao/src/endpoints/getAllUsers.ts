import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name
        const type = req.query.type
        const result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE name LIKE "%${name}%" OR type LIKE "%${type}%"
        `)

        const users = result[0].map((user:any) =>{
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                type: user.type
            }
        })
       
        res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }

    
 }