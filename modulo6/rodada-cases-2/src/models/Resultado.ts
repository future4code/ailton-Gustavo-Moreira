import { UNIDADE_ROLES } from "./Competicao"


export interface criarInputResultadoDTO{
    nome: string,
    atleta: string,
    valor: string
    unidade: UNIDADE_ROLES
}

export interface criarRespostaSaidaDTO{
    message: string
}


export interface rankingSaidaDTO{
    nome: string
}

export interface resultadoDB{
    nome?: string,
    atleta: string,
    valor: string,
    unidade: UNIDADE_ROLES
}

export class Resultado {
    constructor(
        private nome: string,
        private atleta: string,
        private valor: string,
        private unidade: UNIDADE_ROLES
    ) {}

    public pegarNome = () => {
        return this.nome
    }
    
    public pegarAtleta = () => {
        return this.atleta
    }
    
    public pegarValor = () => {
        return this.valor
    }
    
    public pegarUnidade = () => {
        return this.unidade
    }
}