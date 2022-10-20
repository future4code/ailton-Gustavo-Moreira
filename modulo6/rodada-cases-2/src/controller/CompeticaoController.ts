import { Request, Response } from "express";
import { CompeticaoBusiness } from "../business/CompeticaoBusiness";
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
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    public finalizar = async (req:Request, res: Response) =>{
        try {
            const input: criarInputFinalizarDTO = {
                nome: req.body.nome
            }
            
            const response = await this.competicaoBusiness.finalizar(input)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

}