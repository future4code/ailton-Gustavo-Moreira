import { Router } from 'express'
import { ResultadoBusiness } from '../business/ResultadoBusiness'
import { ResultadoController } from '../controller/ResultadoController'
import { ResultadoDatabase } from '../database/ResultadoDatabase'



export const resultadoRouter = Router()

const resultadoController = new ResultadoController(
    new ResultadoBusiness(
        new ResultadoDatabase()
    )
)

resultadoRouter.post("/criar", resultadoController.criar)
resultadoRouter.get("/ranking", resultadoController.ranking)