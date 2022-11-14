import { ResultadoDatabase } from "../database/ResultadoDatabase"
import { RequestError } from "../errors/RequestError"
import { STATUS_ROLES } from "../models/Competicao"
import { criarInputResultadoDTO, criarRespostaSaidaDTO, rankingSaidaDTO, Resultado } from "../models/Resultado"

export class ResultadoBusiness {
    constructor(
        private resultadoDatabase: ResultadoDatabase
    ) {}

    public criar = async (input: criarInputResultadoDTO) => {
        const { nome, atleta, valor, unidade } = input
        //--------------------------------------------------------------------------------
        //Campos Obrigatórios
        if (nome.length < 1) {
            throw new RequestError("Campo Obrigatório")
        }
        
        if (atleta.length < 1) {
            throw new RequestError("Campo Obrigatório")
        }
        if (valor.length < 1) {
            throw new RequestError("Campo Obrigatório")
        }
        if (unidade.length < 1) {
            throw new RequestError("Campo Obrigatório")
        }
        //--------------------------------------------------------------------------------
        //Verificar se a competição está encerrada
        const buscaCompeticao = await this.resultadoDatabase.buscarCompeticao(nome)
        const mapCompeticao = buscaCompeticao?.map((competicao) =>{
            return competicao.status
        })
        const verificaCompeticao = mapCompeticao?.toString()
        if(verificaCompeticao === "encerrada"){
            throw new Error("Competição já está encerrada")
        }
        //--------------------------------------------------------------------------------
        //Verificar se já passou o Resultado do mesmo Atleta
        const buscaResultado = await this.resultadoDatabase.buscarResultado(nome)
        const mapResultado = buscaResultado?.map((resultado) =>{
            return resultado.atleta
        })
        const nomeNaArray = mapResultado?.includes(atleta)    
        if(nomeNaArray  &&  !nome.includes("Dardos")){
            throw new Error("Atleta já passou o resultado")
        }
        //--------------------------------------------------------------------------------
        //Verificar se o Atleta já jogou 3 vezes
        const buscaResultadoAtleta = await this.resultadoDatabase.buscarAtletaPorCompeticao(atleta, nome)
        if(buscaResultadoAtleta?.length === 3){
            throw new Error("Atleta já passou os 3 resultados")
        }
        //--------------------------------------------------------------------------------
        

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
        // console.log(rank)
        const response ={Competicao: nome, rank}
        return response

    }

}