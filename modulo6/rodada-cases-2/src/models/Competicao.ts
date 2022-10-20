export enum UNIDADE_ROLES {
    METROS = "m",
    SEGUNDOS = "s"
}

export enum STATUS_ROLES {
    INICIADA = "iniciada",
    ENCERRADA = "encerrada"
}

export interface criarInputDTO{
    nome: string,
    unidade: UNIDADE_ROLES
}

export interface criarInputFinalizarDTO{
    nome: string
}

export interface criarRespostaSaidaDTO{
    message: string
}

export interface competicaoDB{
    nome: string,
    unidade: UNIDADE_ROLES,
    status: STATUS_ROLES
}

export class Competicao {
    constructor(
        private nome: string,
        private unidade: UNIDADE_ROLES,
        private status: STATUS_ROLES
    ) {}

    public pegarNome = () => {
        return this.nome
    }

    public pegarUnidade = () => {
        return this.unidade
    }

    public pegarStatus = () => {
        return this.status
    }

    public mudarStatus = () =>{
        this.status = STATUS_ROLES.ENCERRADA
    }

}

