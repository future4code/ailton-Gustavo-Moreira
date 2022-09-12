import { Request, Response } from "express";
import { inserirUsuario } from "../data/inserirUsuario";
import { pegarCep } from "../services/pegarCep";
import { usuario } from "../types/usuario";

export async function criarEndereco (req: Request, res: Response) {
    try {
        const cep = req.params.cep

        if(!cep) {
            res.statusCode = 404
            throw new Error("Por favor, informe um CEP")
        }

        const consultaCep =  await pegarCep(cep);

        if(!consultaCep) {
            res.statusCode = 404
            throw new Error(`CEP -> ${cep} não existe`)
        }
        
        const cadastro: usuario ={
            cep: consultaCep.cep,
            logradouro: consultaCep.logradouro,
            numero: 200,
            bairro: consultaCep.bairro,
            cidade: consultaCep.localidade,
            estado: consultaCep.uf 
        }

        console.log(cadastro)

        await inserirUsuario(cadastro)

        res.status(200).send("Usuario Cadastrado!")

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message})
    }
}