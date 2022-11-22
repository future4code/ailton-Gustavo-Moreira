import {ResultadoBusiness} from "../../src/business/ResultadoBusiness"
import { UNIDADE_ROLES } from "../../src/models/Competicao"
import { criarInputResultadoDTO } from "../../src/models/Resultado"
import { ResultadoDatabaseMock } from "../mocks/ResultadoDatabaseMock"

describe("Testando o criar do ResultadoBusiness", ()=>{
    const resultadoBusiness = new ResultadoBusiness(
        new ResultadoDatabaseMock()
    )

    test("Deve criar um Resultado", async () =>{
        const input: criarInputResultadoDTO = {
            nome: "Natação 100 metros livres",
            atleta: "Ademar",
            valor: "10",
            unidade: UNIDADE_ROLES.SEGUNDOS
        }
        const result = await resultadoBusiness.criar(input)
        expect(result.message).toEqual("Resultado informado com sucesso")
    })

    test("Erro caso não passe o nome da Competição", async () =>{
        expect.assertions(1)
        try {
            const input: criarInputResultadoDTO = {
                nome: "",
                atleta: "Ademar",
                valor: "10",
                unidade: UNIDADE_ROLES.SEGUNDOS
            }
            const result = await resultadoBusiness.criar(input)
        } catch (error: any) {
            expect(error.message).toEqual("Campo Obrigatório")
        }
    })
    test("Erro caso não passe o nome do Atleta", async () =>{
        expect.assertions(1)
        try {
            const input: criarInputResultadoDTO = {
                nome: "Natação 100 metros livres",
                atleta: "",
                valor: "10",
                unidade: UNIDADE_ROLES.SEGUNDOS
            }
            const result = await resultadoBusiness.criar(input)
        } catch (error: any) {
            expect(error.message).toEqual("Campo Obrigatório")
        }
    })
    test("Erro caso não passe o valor do Resultado", async () =>{
        expect.assertions(1)
        try {
            const input: criarInputResultadoDTO = {
                nome: "Natação 100 metros livres",
                atleta: "Ademar",
                valor: "",
                unidade: UNIDADE_ROLES.SEGUNDOS
            }
            const result = await resultadoBusiness.criar(input)
        } catch (error: any) {
            expect(error.message).toEqual("Campo Obrigatório")
        }
    })
    test("Erro caso não passe a unidade do valor", async () =>{
        expect.assertions(1)
        try {
            const input: criarInputResultadoDTO = {
                nome: "Natação 100 metros livres",
                atleta: "Ademar",
                valor: "10",
                unidade: "" as any
            }
            const result = await resultadoBusiness.criar(input)
        } catch (error: any) {
            expect(error.message).toEqual("Campo Obrigatório")
        }
    })
    test("Erro caso a competição já tenha encerrado", async () =>{
        try {
            const input: criarInputResultadoDTO = {
                nome: "Corrida de 100m",
                atleta: "Ademar",
                valor: "10",
                unidade: UNIDADE_ROLES.SEGUNDOS
            }
            const result = await resultadoBusiness.criar(input)
        } catch (error:any) {
            expect(error.message).toEqual("Competição já está encerrada")
        }
    })
    test("Erro caso o Atleta passe mais de um Resultado, Exceto Dardos", async () =>{
        try {
            const input: criarInputResultadoDTO = {
                nome: "Natação 100 metros livres",
                atleta: "Felps",
                valor: "10.27",
                unidade: UNIDADE_ROLES.SEGUNDOS
            }
            const result = await resultadoBusiness.criar(input)
        } catch (error:any) {
            expect(error.message).toEqual("Atleta já passou o resultado")
        }
    })
    test("Erro caso o Atleta de Dardos passe mais de 3 resultados", async () =>{
        try {
            const input: criarInputResultadoDTO = {
                nome: "Lançamento de Dardos",
                atleta: "Gustavo",
                valor: "61",
                unidade: UNIDADE_ROLES.METROS
            }
            const result = await resultadoBusiness.criar(input)
            
        } catch (error:any) {
            expect(error.message).toEqual("Atleta já passou os 3 resultados")
        }
    })
})