import express, {Request, Response} from "express";
import cors from "cors";
import {users, user, UserType} from "./data"

const app = express();

app.use(express.json());
app.use(cors());

//exercicio1 - a) get / b) "/users"
//http://localhost:3003/users
app.get("/users", (req: Request, res: Response) =>{
    
    let errorCode:number = 404

    try {
        if(!users.length){
            errorCode = 401
            throw new Error ('Não tem usuários.')
        }
    
        res.status(201).send(users)
    } catch (error:any) {
        res.status(errorCode).send({messagem: error.message})
    }
})
//exercicio2 -
//http://localhost:3003/users-type?type=NORMAL
app.get('/users-type', (req: Request, res: Response) =>{
    let errorCode:number = 404

    try {
        const type: UserType = req.query.type as UserType
        const filtroType: user[] = users.filter((usuario) => {
            return usuario.type === type })
        
        if(!filtroType.length){
            errorCode = 401
            throw new Error ('Não tem usuários com esse tipo.')
        }

        res.status(200).send(filtroType)

    } catch (error:any) {
        res.status(errorCode).send({messagem: error.message})
    }
})

//exercicio3 -
//http://localhost:3003/users-name?name=Bob
app.get('/users-name', (req: Request, res: Response) =>{
    let errorCode:number = 404

    try {
        const name: string = req.query.name as string
        const filtroName: user | undefined = users.find((usuario) => {
            return usuario.name === name })
        
        if(!filtroName){
            errorCode = 401
            throw new Error ('Usuario não encontrado.')
        }

        res.status(200).send(filtroName)

    } catch (error:any) {
        res.status(errorCode).send({messagem: error.message})
    }
})

//exercicio4 -
//http://localhost:3003/createUser
app.post('/createUser', (req: Request, res: Response) => {
    let errorCode:number = 404
    
    try {
        const {id, name, email, type, age} = req.body
        

        if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error("Algum campo nao foi preenchido corretamente.")
        }

        const newUser: user= {id, name, email, type, age}

        users.push(newUser)

        res.status(201).send({message: "Usuario criado!"})

    } catch (error:any) {
        res.status(errorCode).send({messagem: error.message})
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});