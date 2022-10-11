import { Resultado, resultadoDB } from "../models/Resultado"
import { BaseDatabase } from "./BaseDatabase"

export class ResultadoDatabase extends BaseDatabase {
    public static TABELA_RESULTADO = "CASE_Olimpiadas_Resultado"

    public resultadoDBModelo = (resultado: Resultado): resultadoDB => {
        const resultadoDB: resultadoDB = {
            nome: resultado.pegarNome(),
            atleta: resultado.pegarAtleta(),
            valor: resultado.pegarValor(),
            unidade: resultado.pegarUnidade()
        }

        return resultadoDB
    }

    public criar = async (resultado: Resultado): Promise<void> => {
        const resultadoDB = this.resultadoDBModelo(resultado)

        await BaseDatabase
            .connection(ResultadoDatabase.TABELA_RESULTADO)
            .insert(resultadoDB)
    }

    public ranking = async (nome: string): Promise<resultadoDB[] | undefined> =>{
        const result: resultadoDB[] = await BaseDatabase
        .connection(ResultadoDatabase.TABELA_RESULTADO)
        .select("atleta", "valor", "unidade")
        .where({nome})
        .orderBy("valor", "asc")

        return result 
    }
}