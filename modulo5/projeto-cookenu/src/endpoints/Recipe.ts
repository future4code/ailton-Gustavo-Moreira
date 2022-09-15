import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { MissingFields } from "../error/MissingFields";
import { WrongType } from "../error/WrongType";
import Recipe from "../model/Recipe";
import Authenticator, { typeUser } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class RecipeEndpoint {

    public async creatRecipe(req: Request, res: Response) {
        try {

            const { titulo, descricao, data_criacao } = req.body
            

            if (!titulo || !descricao || !data_criacao) {
                throw new MissingFields()
            }

            // let data_brasileira = data_criacao;
            // let data_americana = data_brasileira.split("/").reverse().join("-");

            const recipeDB = new RecipeDataBase

            const id = new GenerateId().createId()

            const recipe = new Recipe(id, titulo, descricao, data_criacao)

            const response = await recipeDB.creatRecipe(recipe)

            const token = new Authenticator().generateRecipeToken({id})

            console.log(recipe)

            res.status(201).send({ message: response, token })


        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

}
export default RecipeEndpoint