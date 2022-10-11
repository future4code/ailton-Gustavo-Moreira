import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

import { competicaoRouter } from './router/competicaoRouter'
import { resultadoRouter } from './router/resultadoRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/competicao", competicaoRouter)
app.use("/resultado", resultadoRouter)
