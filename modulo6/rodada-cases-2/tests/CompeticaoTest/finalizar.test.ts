import {CompeticaoBusiness} from "../../src/business/CompeticaoBusiness"
import { criarInputDTO, criarInputFinalizarDTO, UNIDADE_ROLES } from "../../src/models/Competicao"
import {CompeticaoDatabaseMock} from "../mocks/CompeticaoDatabaseMock"

describe("Testando finalizar da UserBusiness", () => {
    const competicaoBusiness = new CompeticaoBusiness(
        new CompeticaoDatabaseMock()
    )

    test("Caso de sucesso", async () => {
        const input: criarInputFinalizarDTO = {
            nome: "Corrida de 100m"
        }

        const result = await competicaoBusiness.finalizar(input)

        expect(result.message).toEqual("Competição encerrada")
    })

})