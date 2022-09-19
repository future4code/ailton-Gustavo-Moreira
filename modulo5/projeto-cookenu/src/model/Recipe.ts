class Recipe{
    constructor(
        private id: string,
        private titulo: string,
        private descricao: string,
        private data_criacao: string,
        private user_id: string
    ){}

    public getId(){
        return this.id
    }
    public getTitulo(){
        return this.titulo
    }
    public getDescricao(){
        return this.descricao
    }
    public getData(){
        return this.data_criacao
    }
    public getUserId(){
        return this.user_id
    }
}

export default Recipe