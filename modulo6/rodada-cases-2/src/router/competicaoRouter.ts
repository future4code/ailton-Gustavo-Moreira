import { Router } from 'express'
import { CompeticaoBusiness } from '../business/CompeticaoBusiness'
import { CompeticaoController } from '../controller/CompeticaoController'
import { CompeticaoDatabase } from '../database/CompeticaoDatabase'


export const competicaoRouter = Router()

const competicaoController = new CompeticaoController(
    new CompeticaoBusiness(
        new CompeticaoDatabase()
    )
)

competicaoRouter.post("/criar", competicaoController.criar)
competicaoRouter.put("/finalizar", competicaoController.finalizar)