class RecipeView{
    constructor(
        private titulo: string,
        private descricao: string,
    ){}
    public getTitulo(){
        return this.titulo
    }
    public getDescricao(){
        return this.descricao
    }
}

export default RecipeView