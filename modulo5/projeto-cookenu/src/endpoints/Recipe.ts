import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { MissingFields } from "../error/MissingFields";
import Recipe from "../model/Recipe";
import Authenticator, { typeUser } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";


class RecipeEndpoint {

    public async creatRecipe(req: Request, res: Response) {
        try {

            const { titulo, descricao, data_criacao } = req.body
            

            if (!titulo || !descricao || !data_criacao) {
                throw new MissingFields()
            }
            //pegando o Usuario
            const token = req.headers.authorization as string
            if(!token){
                throw new MissingFields()
            }
            const authentication = new Authenticator().verifyToken(token)
            const user = await new UserDataBase().getUserById(authentication.id)
            
            const recipeDB = new RecipeDataBase

            const id = new GenerateId().createId()

            const recipe = new Recipe(id, titulo, descricao, data_criacao, user.getId())
            //criando a receita
            const response = await recipeDB.creatRecipe(recipe)
            //pegando pelo ID para aparecer no psotman
            const responseView = await recipeDB.getRecipeByID(recipe.getId())

            res.status(201).send(responseView)


        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async recipeById(req: Request, res: Response){
        try {

            const {id} = req.params

            const token = req.headers.authorization as string
            if(!token){
                throw new MissingFields()
            }
            new Authenticator().verifyToken(token)

            const recipe = await new RecipeDataBase().getRecipeByID(id)

            res.status(200).send({recipe})

        } catch (error:any) {
            res.status(500).send({message: error.message})
        }
    }
}
export default RecipeEndpoint