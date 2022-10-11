import { ResultadoDatabase } from "../database/ResultadoDatabase"
import { RequestError } from "../errors/RequestError"
import { criarInputResultadoDTO, criarRespostaSaidaDTO, rankingSaidaDTO, Resultado } from "../models/Resultado"

export class ResultadoBusiness {
    constructor(
        private resultadoDatabase: ResultadoDatabase
    ) {}

    public criar = async (input: criarInputResultadoDTO) => {
        const { nome, atleta, valor, unidade } = input

        if (typeof nome !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string")
        }
        if (typeof atleta !== "string") {
            throw new RequestError("Parâmetro 'atleta' inválido: deve ser uma string")
        }
        if (typeof valor !== "string") {
            throw new RequestError("Parâmetro 'valor' inválido: deve ser uma string")
        }
        if (typeof unidade !== "string") {
            throw new RequestError("Parâmetro 'unidade' inválido: deve ser uma string")
        }

        const resultado = new Resultado(
            nome,
            atleta,
            valor,
            unidade
        )
        await this.resultadoDatabase.criar(resultado)

        const response: criarRespostaSaidaDTO = {
            message: "Resultado informado com sucesso",
        }
        return response
    }

    public ranking = async (input: rankingSaidaDTO) =>{
        const {nome} = input

        const rank = await this.resultadoDatabase.ranking(nome)
        const response ={Competicao: "Corrida de 100m", rank}
        return response

    }

}