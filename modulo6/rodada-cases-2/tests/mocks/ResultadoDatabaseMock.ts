import { competicaoDB, STATUS_ROLES, UNIDADE_ROLES } from "../../src/models/Competicao"
import { Resultado, resultadoDB } from "../../src/models/Resultado"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class ResultadoDatabaseMock extends BaseDatabase {
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
    
    }

    public ranking = async (nome: string): Promise<resultadoDB[] | undefined> =>{
        switch(nome) {
            case "Natação 100 metros livres":
                return [
                
                    {
                        atleta: "Felps",
                        valor: "10.27",
                        unidade: UNIDADE_ROLES.SEGUNDOS
                    },
                    {
                        atleta: "Gustavo Borges",
                        valor: "11.30",
                        unidade: UNIDADE_ROLES.SEGUNDOS
                    }
                ]
                  
            default:
                return undefined
                }
    }

    public buscarCompeticao = async (nome:string): Promise<competicaoDB[] | undefined> =>{
        switch(nome) {
            case "Corrida de 100m":
                return [{
                    nome: "Corrida de 100m",
                    unidade: UNIDADE_ROLES.METROS,
                    status: STATUS_ROLES.ENCERRADA
                }]
            default:
                return undefined
        }
    }

    public buscarAtletaPorCompeticao = async (atleta: string, nome: string): Promise<resultadoDB[] | undefined> =>{
         if (atleta === "Gustavo") {
            switch (nome) {
                case "Lançamento de Dardos":
                    return [{
                        nome: 'Gustavo',    
                        atleta: 'Gustavo',
                        valor: '61',
                        unidade: UNIDADE_ROLES.METROS
                    }]
                default:
                    break
            }
        }

        return undefined
    }

    public buscarResultado = async (nome:string): Promise<resultadoDB[] | undefined> =>{
        switch(nome) {
            case "Natação 100 metros livres":
                return [
                     {
                      nome: 'Natação 100 metros livres',
                      atleta: 'Felps',
                      valor: '10.27',
                      unidade: UNIDADE_ROLES.SEGUNDOS
                    },
                     {
                      nome: 'Natação 100 metros livres',
                      atleta: 'Gustavo Borges',
                      valor: '11.30',
                      unidade: UNIDADE_ROLES.SEGUNDOS
                    }
                  ]
            default:
                return undefined
        }
    }
}