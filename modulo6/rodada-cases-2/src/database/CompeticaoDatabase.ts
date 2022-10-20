import { Competicao, competicaoDB } from "../models/Competicao"
import { BaseDatabase } from "./BaseDatabase"

export class CompeticaoDatabase extends BaseDatabase {
    public static TABELA_COMPETICAO = "CASE_Olimpiadas_Competicao"

    public competicaoDBModelo = (competicao: Competicao): competicaoDB => {
        const competicaoDB: competicaoDB = {
            nome: competicao.pegarNome(),
            unidade: competicao.pegarUnidade(),
            status: competicao.pegarStatus()
        }

        return competicaoDB
    }

    public criar = async (competicao: Competicao): Promise<void> => {
        const competicaoDB = this.competicaoDBModelo(competicao)

        await BaseDatabase
            .connection(CompeticaoDatabase.TABELA_COMPETICAO)
            .insert(competicaoDB)
    }

    public buscarPeloNome = async (nome: string): Promise <competicaoDB | undefined> =>{
        const result: competicaoDB[] = await BaseDatabase
        .connection(CompeticaoDatabase.TABELA_COMPETICAO)
        .select()
        .where({nome})

        return result[0]
    }

    public finalizar = async (nome: string): Promise<void> =>{
        await BaseDatabase
        .connection(CompeticaoDatabase.TABELA_COMPETICAO)
        .update("status", "encerrada")
        .where({nome})

    }
}