import express, {Express, Request, response, Response} from "express";
import cors from "cors";
import {afazer, listaAFazeres} from "./data"

//middleware
const app = express();
app.use(express.json());
app.use(cors())

//exercicio1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//exercicio2 = está no Data

//exercicio3 = está no Data

//exercicio4
app.get("/afazeres", (req: Request, res: Response) =>{
    const tarefaAndamento = listaAFazeres.filter((tarefas) =>{
        return !tarefas.completed
    })
    // res.status(200).send(tarefaAndamento)
    
})

//exercicio5 - http://localhost:3003/criarTarefa
app.post("/criarTarefa", (req: Request, res: Response) =>{
    const {userId, id, title} = req.body

    const novaTarefa: afazer = { userId, id, title, completed: false}

    listaAFazeres.push(novaTarefa)
    // res.send(listaAFazeres)
   
})

//exercicio6 - http://localhost:3003/mudaStatus/:userId/:id
app.put("/mudaStatus/:userId/:id", (req: Request, res: Response) =>{
    const userId = req.params.userId
    const id = req.params.id

    //filtrando o usuario
    const usuarioFiltrado = listaAFazeres.filter((user) =>{
        return user.userId === Number(userId)
    }).filter((idTarefa) =>{
        return idTarefa.id === Number(id)
    })

    // mudando o Status

    const tarefaAndamento = usuarioFiltrado.filter((tarefas) =>{
        if (tarefas){
            return tarefas.completed = false
        }else {
            return !tarefas
        }
         })

        //  res.send(usuarioFiltrado)
})

//exercicio7 - http://localhost:3003/apagarTarefa/:title
app.delete("/apagarTarefa/:title", (req: Request, res: Response) =>{
    const title = req.params.title
    
     //filtrando o usuario 
     const usuarioFiltrado = listaAFazeres.filter((user) =>{
        return user.title !== title
     })

    // res.send(usuarioFiltrado)
})

//exercicio8 - http://localhost:3003/filtrarUsuario/:userId
app.get("/filtrarUsuario/:userId", (req: Request, res: Response) =>{
    const userId = req.params.userId

    const usuariosFiltrados = listaAFazeres.filter((usuario) =>{
        return usuario.userId === Number(userId)
    })
    // res.send(usuariosFiltrados)
})

//ligando o servidor
app.listen(3003, () =>{
    console.log("Servidor ligou http://localhost:3003")
})