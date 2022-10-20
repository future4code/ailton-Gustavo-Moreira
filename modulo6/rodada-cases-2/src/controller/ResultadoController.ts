import { Request, Response } from "express";
import { ResultadoBusiness } from "../business/ResultadoBusiness";
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
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    public ranking = async (req: Request, res: Response) =>{
        try {
            const input: rankingSaidaDTO = {
                nome: req.body.nome
            }
            const response = await this.resultadoBusiness.ranking(input)
            res.status(200).send(response)
        } catch (error: any) {
            
            res.status(500).send({ message: error.message })         
        }
    }

}