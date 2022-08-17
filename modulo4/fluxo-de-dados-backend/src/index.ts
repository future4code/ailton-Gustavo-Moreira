import express, {Request, Response}from "express";
import cors from "cors";
import {TipoProduto, listaDeProdutos} from "./data"

const app = express();

app.use(express.json());
app.use(cors());


//Exercicio2 - criado no data

//Exercicio3 - http://localhost:3003/addProduto
app.post("/addProduto", (req:Request, res:Response) =>{
    try {
        const {id, name, price} = req.body

        if (!id) {
            res.statusCode = 401
            throw new Error(`O Id deve ser preenchido.`)
        }

        if (!name) {
            res.statusCode = 401
            throw new Error(`O Nome deve ser preenchido.`)
        }

        if (name !== String(name)) {
            res.statusCode = 401
            throw new Error(`O Nome deve ser uma String.`)
        }


        if (!price) {
            res.statusCode = 401
            throw new Error(`O Valor deve ser preenchido.`)
        }

        if (price < 0) {
            res.statusCode = 401
            throw new Error(`O Valor deve ser maior que 0.`)
        }

        if (price !== Number(price)) {
            res.statusCode = 401
            throw new Error(`O Valor deve ser um numero.`)
        }

        

    
    const novoProduto: TipoProduto = {id, name, price }
    listaDeProdutos.push(novoProduto)
        res.status(201).send(listaDeProdutos)
        
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

//Exercicio4 - http://localhost:3003/mensagem
app.get("/mensagem", (req:Request, res:Response) => {          
    res.send(listaDeProdutos)
    // console.log (listaDeProdutos)
})

//Exercicio5 - http://localhost:3003/editarProduto/:id
app.put("/editarProduto/:id", (req:Request, res:Response) =>{
    try {
        const {id, name, price} = req.body
        const idProduto = req.params.id

        if (!price) {
            res.statusCode = 401
            throw new Error(`O Valor deve ser preenchido.`)
        }

        if (price < 0) {
            res.statusCode = 401
            throw new Error(`O Valor deve ser maior que 0.`)
        }

        if (price !== Number(price)) {
            res.statusCode = 401
            throw new Error(`O Valor deve ser um numero.`)
        }
        
        //Filtrando o produto
        const indexProduct: any = listaDeProdutos.findIndex((produto) =>{
            return produto.id === idProduto
        })

        listaDeProdutos[indexProduct].price = Number(price)
        
        
        console.log(listaDeProdutos)
        res.send(listaDeProdutos)
        
    } catch (error) {
        console.log("Tá dando erro malandro.")
    }

} )

//Exercicio6 - http://localhost:3003/apagarProduto/:id
app.delete("/apagarProduto/:id", (req: Request, res: Response) =>{
    
    try {
        const id = req.params.id

       const produtoMapeado = listaDeProdutos.filter((produto) =>{
        return produto.id === id
        }).map((linha) =>{
            return linha.id
        })

    //    if ( produtoMapeado !== id) {
    //     console.log(produtoMapeado)
    //     console.log(id)
    //     res.statusCode = 401
    //     throw new Error(`Id nao encontrado`)
    //     }
        
        //filtrando o produto
        const produtoFiltrado = listaDeProdutos.filter((produto) =>{
            return produto.id !== id
        })
        
        
        console.log(produtoMapeado)
       res.send(produtoFiltrado)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
    
})


//Exercicio7 - Feito

//Servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});