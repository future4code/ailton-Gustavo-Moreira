import { competicaoDB } from "../models/Competicao"
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

    public ranking = async (nome: string): Promise<resultadoDB | undefined> =>{
        const result: resultadoDB[] = await BaseDatabase
        .connection.raw(`select atleta, (select max(valor)) as valor, unidade 
        from CASE_Olimpiadas_Resultado
        where nome = "${nome}"
        group by atleta, unidade
        order by valor ASC;`)

        return result[0]
    }

    public buscarCompeticao = async (nome:string): Promise<competicaoDB[] | undefined> =>{
        const result:competicaoDB[] = await BaseDatabase
        .connection("CASE_Olimpiadas_Competicao")
        .select()
        .where({nome})

        return result
    }

    public buscarAtletaPorCompeticao = async (atleta: string, nome: string): Promise<resultadoDB[] | undefined> =>{
        const result: resultadoDB[] = await BaseDatabase
        .connection(ResultadoDatabase.TABELA_RESULTADO)
        .select()
        .where({atleta, nome})

        return result
    }

    public buscarResultado = async (nome:string): Promise<resultadoDB[] | undefined> =>{
        const result: resultadoDB[] = await BaseDatabase
        .connection(ResultadoDatabase.TABELA_RESULTADO)
        .select()
        .where({nome})

        return result
    }
}