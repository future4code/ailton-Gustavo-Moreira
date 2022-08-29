import express, { Request, Response } from "express";
import cors from "cors";
import { conta, extrato, usuarios } from "./data"

//middleware
const app = express();
app.use(express.json());
app.use(cors());

//Mostar Todos Usuarios
//http://localhost:3003/usuario
app.get("/usuario", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        res.send(usuarios)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
})

//Criar Usuario
//http://localhost:3003/criarUsuario
app.post("/criarUsuario", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { nome, cpf, nascimento, saldo, transacoes } = req.body

        if (!nome || !cpf || !nascimento) {
            errorCode = 422
            throw new Error("Esta faltando nome, cpf ou nascimento")
        }

        const ano_atual = new Date().getFullYear();
        const data_aniversario = nascimento;
        const ano_informado = data_aniversario.split('/')[2];
        const idade = ano_atual - ano_informado

        if (idade < 18) {
            errorCode = 422
            throw new Error("Usuario menor de idade")
        }

        const novoUsuario: conta = { nome, cpf, nascimento, saldo, transacoes }

        usuarios.push(novoUsuario)
        res.status(201).send({ messagem: "Usuario criado com sucesso" })
        res.send(idade)


    } catch (error: any) {
        res.status(errorCode).send({ mensagem: error.message })
    }
})


//servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});