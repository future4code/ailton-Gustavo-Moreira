import { Request, Response } from "express";
import { CompeticaoBusiness } from "../business/CompeticaoBusiness";
import { BaseError } from "../errors/BaseError";
import { criarInputDTO, criarInputFinalizarDTO } from "../models/Competicao";

export class CompeticaoController {
    constructor(
        private competicaoBusiness: CompeticaoBusiness
    ) {}

    public criar = async (req: Request, res: Response) => {
        try {
            const input: criarInputDTO = {
                nome: req.body.nome,
                unidade: req.body.unidade
            }

            const response = await this.competicaoBusiness.criar(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar a competição" })
        }
    }

    public finalizar = async (req:Request, res: Response) =>{
        try {
            const input: criarInputFinalizarDTO = {
                nome: req.body.nome
            }
            
            const response = await this.competicaoBusiness.finalizar(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar a competição" })
        }
    }

}