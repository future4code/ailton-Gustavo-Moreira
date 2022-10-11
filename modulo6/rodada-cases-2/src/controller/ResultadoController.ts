import { Request, Response } from "express";
import { ResultadoBusiness } from "../business/ResultadoBusiness";
import { BaseError } from "../errors/BaseError";
import { criarInputResultadoDTO, rankingSaidaDTO } from "../models/Resultado";

export class ResultadoController {
    constructor(
        private resultadoBusiness: ResultadoBusiness
    ) {}

    public criar = async (req: Request, res: Response) => {
        try {
            const input: criarInputResultadoDTO = {
                nome: req.body.nome,
                atleta: req.body.atleta,
                valor: req.body.valor,
                unidade: req.body.unidade
            }

            const response = await this.resultadoBusiness.criar(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao passar o resultado" })
        }
    }

    public ranking = async (req: Request, res: Response) =>{
        try {
            const input: rankingSaidaDTO = {
                nome: req.body.nome
            }
            const response = await this.resultadoBusiness.ranking(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }   
            res.status(500).send({ message: "Erro inesperado ao tentar pegar o ranking" })         
        }
    }

}