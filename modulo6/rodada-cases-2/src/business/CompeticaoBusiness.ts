import { CompeticaoDatabase } from "../database/CompeticaoDatabase"
import { RequestError } from "../errors/RequestError"
import { Competicao, criarInputDTO, criarInputFinalizarDTO, criarRespostaSaidaDTO, STATUS_ROLES} from "../models/Competicao"

export class CompeticaoBusiness {
    constructor(
        private competicaoDatabase: CompeticaoDatabase
    ) {}

    public criar = async (input: criarInputDTO) => {
        // : Promise<criarRespostaSaidaDTO>
        const { nome, unidade } = input

        if (typeof nome !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string")
        }

        if (nome.length < 3) {
            throw new RequestError("Parâmetro 'name' inválido: mínimo de 3 caracteres")
        }

        const competicao = new Competicao(
            nome,
            unidade,
            STATUS_ROLES.INICIADA
        )

        await this.competicaoDatabase.criar(competicao)

        const response: criarRespostaSaidaDTO = {
            message: "Competição criada com sucesso",
        }

        return response
    }

    
    public finalizar = async (input: criarInputFinalizarDTO) => {
        const {nome} = input

        await this.competicaoDatabase.finalizar(nome)
        const competicao = await this.competicaoDatabase.buscarPeloNome(nome)
        
        console.log(competicao)
    }

}