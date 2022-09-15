import Recipe from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDataBase extends BaseDatabase{
    public async creatRecipe(recipe: Recipe): Promise<string>{
        // let data_americana = data_criacao.split("/").reverse().join("-");
        await this.getConnection().insert({
            id: recipe.getId(),
            titulo: recipe.getTitulo(),
            descricao: recipe.getDescricao(),
            data_criacao: recipe.getData().split("/").reverse().join("-")
        }).into("Receita_Cookenu")
        
        return `A Receita ${recipe.getTitulo()} foi criada com sucesso!`
    }
}