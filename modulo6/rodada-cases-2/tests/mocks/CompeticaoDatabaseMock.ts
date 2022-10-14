import { Competicao, competicaoDB, STATUS_ROLES, UNIDADE_ROLES } from "../../src/models/Competicao"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class CompeticaoDatabaseMock extends BaseDatabase {
    public static TABELA_COMPETICAO = "CASE_Olimpiadas_Competicao"

    public competicaoDBModelo = (competicao: Competicao) => {
        const competicaoDB: competicaoDB = {
            nome: competicao.pegarNome(),
            unidade: competicao.pegarUnidade(),
            status: competicao.pegarStatus()
        }

        return competicaoDB
    }

    public criar = async (competicao: Competicao): Promise<void> => {
        
    }

    public buscarPeloNome = async (nome: string): Promise <competicaoDB | undefined> =>{
        switch(nome) {
            case "Corrida de 100m":
                return {
                    nome: "Corrida de 100m",
                    unidade: UNIDADE_ROLES.METROS,
                    status: STATUS_ROLES.ENCERRADA
                }
            default:
                return undefined
            }
    }

    public finalizar = async (nome: string): Promise<void> =>{

    }
}