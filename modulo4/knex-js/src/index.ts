import express, {Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

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
//------------------------------------------------------------------------------------------------

//CONSULTAS

  // buscar informação no Banco de dados por nome
  const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
  }

//   searchActor("Tony Ramos")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});


//Media Salarial
const mediaSalaria = async (gender: string) => {
 const result = await connection("Actor").avg("salary as Média").where({gender: gender})
 console.log (result)
return result[0]
}

//------------------------------------------------------------------------------------------------
//PEGAR ATOR POR ID
// buscar informação no Banco de dados por ID
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

//   endpoint para pegar Ator por id
//   http://localhost:3003/users/:id
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
      
      console.log(actor)
      res.status(200).send(actor)
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
//   VER O GENERO
  // buscar informação no Banco de dados por genero
  const countActors = async (gender: string) => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    console.log(count)
    return count;
  };

//   endpoint para pegar ver o genero
//   http://localhost:3003/users/actor?gender=
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count  = await countActors(req.query.gender as string);
       
      res.status(200).send({quantity: count})
      console.log(count)

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// CRIAR UM ATOR
const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

//   endpoint para criar um Ator
//   http://localhost:3003/actor
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
          );
      
          res.status(200).send("Ator criado com sucesso");

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
  //ATUALIZAR SALARIO
  const atualizarSalario = async (id:string, salary:number) => {
    await connection("Actor").update({salary: salary}).where({id: id});
   };
//   endpoint para Atualizar Salario
//   http://localhost:3003/atualizarSalario
app.put("/atualizarSalario", async (req: Request, res: Response) => {
    try {
        await atualizarSalario(req.body.id, req.body.salary);
      
          res.status(200).send("Salario Atualizado");

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
//DELETAR ATOR
const apagarAtor = async (id:string) => {
    await connection("Actor").delete().where({id: id});
   }
//   endpoint para deletar Ator
//   http://localhost:3003/actor/:id
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await apagarAtor(req.params.id);
      
          res.status(200).send("Ator Apagado");

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 
//------------------------------------------------------------------------------------------------








//------------------------------------------------------------------------------------------------
// http://localhost:3003
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});