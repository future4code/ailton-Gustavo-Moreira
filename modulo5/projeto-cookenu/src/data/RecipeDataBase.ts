import Recipe from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDataBase extends BaseDatabase{
    public async creatRecipe(recipe: Recipe): Promise<string>{
        await this.getConnection().insert({
            id: recipe.getId(),
            titulo: recipe.getTitulo(),
            descricao: recipe.getDescricao(),
            data_criacao: recipe.getData().split("/").reverse().join("-"),
            user_id: recipe.getUserId()
        }).into("Receita_Cookenu")
        
        return `A Receita ${recipe.getTitulo()} foi criada com sucesso!`
    }
}