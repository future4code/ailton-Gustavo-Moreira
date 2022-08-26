import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
    client: "mysql",
	connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

//------------------------------------------------------------------------------------------------------------
//1 CRIAR USUARIO
//http://localhost:3003/user
app.post("/user", async (req: Request, res: Response) => {
    try {
        const {id, name, nickname, email} = req.body
        if (!name){
            throw new Error ("Nome deve ser preenchido!")
        }
        if(!nickname){
            throw new Error ("Apelido deve ser preenchido!")
        }
        if(!email){
            throw new Error ("Email deve ser preenchido!")
        }

        await connection.insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        }).into("Users");
      
          res.status(201).send("Usuario criado com sucesso!");

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send({message: error.message})
    }
  }) 
//------------------------------------------------------------------------------------------------------------
//2 PEGAR USUARIO por ID
//http://localhost:3003/user/:id
const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Users WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
app.get("/user/:id", async (req: Request, res: Response) => {
    
    try {
        const id: string = req.params.id as string
        
        if (!id || id == undefined){
            throw new Error ("Id não encontrado!")
        }
        
        const actor = await getUserById(id)
      
      console.log(actor)
      res.status(200).send(actor)
        
    } catch (error: any) {
        console.log(error.message)
    res.status(500).send({message: error.message})
    }
})
//------------------------------------------------------------------------------------------------------------
//3 EDITAR USUARIO
//http://localhost:3003/user/edit/:id
const editUser = async (id:string, name:string, nickname:string, email:string) => {
    await connection("Users").update({name: name, nickname: nickname, email: email}).where({id: id});
   };   
app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        await editUser(req.body.id, req.body.name, req.body.nickname, req.body.email);
        
          res.status(200).send("Usuario Atualizado!");

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send({message: error.message})
    }
  }) 
//------------------------------------------------------------------------------------------------------------
//4 CRIAR TAREFA
//http://localhost:3003/task
app.post("/task", async (req: Request, res: Response) => {
    try {
        const {id, title, description, limit_date, creator_user_id} = req.body
        let dataBrasileira = limit_date
        let dataAmericana = dataBrasileira.split("/").reverse().join("-")

        if (!title){
            throw new Error ("Titulo deve ser preenchido!")
        }
        if(!description){
            throw new Error ("Descrição deve ser preenchido!")
        }
        if(!limit_date){
            throw new Error ("Data Limite deve ser informado!")
        }
        if(!creator_user_id){
            throw new Error ("Informar o ID de quem criou a Tarefa.")
        }

        await connection.insert({
            id: id,
            title: title,
            description: description,
            limit_date: dataAmericana,
            creator_user_id: creator_user_id
        }).into("ListTask");
      
          res.status(201).send("Tarefa criado com sucesso!");

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send({message: error.message})
    }
  }) 
//------------------------------------------------------------------------------------------------------------
//5 PEGAR TAREFA por ID
//http://localhost:3003/task/:id
const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM ListTask WHERE id = '${id}'
    `)

    function data2Digitos(num: number) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date: Date) {
        return [
            data2Digitos(date.getDate()),
            data2Digitos(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/');
      }

      console.log(formatDate(result[0][0].limit_date));
    
    result[0][0].limit_date = formatDate(result[0][0].limit_date)
    return result[0][0];
  };
app.get("/task/:id", async (req: Request, res: Response) => {
    
    try {

        const id: string = req.params.id as string
        const task = await getTaskById(id)
      
    //   console.log(task)
      res.status(200).send(task)
        
    } catch (error: any) {
        console.log(error.message)
    res.status(500).send({message: error.message})
    }
})
//------------------------------------------------------------------------------------------------------------
//6 PEGAR TODOS OS USUARIOS
//http://localhost:3003/user/all
app.get("/users/all", async (req: Request, res: Response) => {
    try {

        const allUsers = await connection("Users").select("*")

        if (!allUsers.length) {
            res.statusCode = 404
            throw new Error("Não existe usuarios cadastrados")
        }

      res.status(200).send(allUsers)
        
    } catch (error: any) {
        console.log(error.message)
    res.status(500).send({message: error.message})
    }
})
//------------------------------------------------------------------------------------------------------------
//7 PEGAR TAREFAS POR USUARIO
//http://localhost:3003/task?creator_user_id=id
const getTaskByUser = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM ListTask WHERE creator_user_id = '${id}'
    `)

    function data2Digitos(num: number) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date: Date) {
        return [
            data2Digitos(date.getDate()),
            data2Digitos(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/');
      }

    
      for (let i = 0; i < result[0].length; i++) {
        result[0][i].limit_date = formatDate(result[0][i].limit_date)    
      }
      
    return result [0];
  };
app.get("/task", async (req: Request, res: Response) => {
    
    try {

        const id = req.query.creator_user_id as string
        const task = await getTaskByUser(id)
      
      console.log(task)
      res.status(200).send(task)
        
    } catch (error: any) {
        console.log(error.message)
    res.status(500).send({message: error.message})
    }
})
//8 PESQUISAR USUARIO
//http://localhost:3003/task?creator_user_id=id
const getUserByNick = async (busca: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Users WHERE nickname = '${busca}' OR email='${busca}'
    `)
      
    return result [0][0];
  };
app.get("/user", async (req: Request, res: Response) => {
    
    try {

        const busca = req.query.busca as string

        const task = await getUserByNick(busca)
      
      console.log(task)
      res.status(200).send(task)
        
    } catch (error: any) {
        console.log(error.message)
    res.status(500).send({message: error.message})
    }
})
//------------------------------------------------------------------------------------------------------------
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});