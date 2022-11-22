import {CompeticaoBusiness} from "../../src/business/CompeticaoBusiness"
import { criarInputDTO, UNIDADE_ROLES } from "../../src/models/Competicao"
import {CompeticaoDatabaseMock} from "../mocks/CompeticaoDatabaseMock"

describe("Testando criar da CompetiçãoBusiness", () => {
    const competicaoBusiness = new CompeticaoBusiness(
        new CompeticaoDatabaseMock()
    )

    test("Deve criar Competição", async () => {
        const input: criarInputDTO = {
            nome: "Dardos Semi-Final",
            unidade: UNIDADE_ROLES.METROS
        }

        const result = await competicaoBusiness.criar(input)

        expect(result.message).toEqual("Competição criada com sucesso")
    })

    test("Erro ao criar um nome com menos que 3 caracteres", async () => {
        expect.assertions(1)
        try {
            const input: criarInputDTO = {
                nome: "du",
                unidade: UNIDADE_ROLES.METROS
            }
    
            await competicaoBusiness.criar(input)
        } catch (error :any) {            
                expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
                         
        }
    })

    test("Erro ao criar um nome sem ser string", async () => {
        expect.assertions(1)
        try {
            const input: criarInputDTO = {
                nome: 1578 as any,
                unidade: UNIDADE_ROLES.METROS
            }
    
            await competicaoBusiness.criar(input)
        } catch (error :any) {            
                expect(error.message).toEqual("Parâmetro 'name' inválido: deve ser uma string")
                         
        }
    })
})