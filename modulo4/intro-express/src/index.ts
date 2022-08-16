import express from "express";
import cors from "cors";
import {playlist,Playlist} from "./data"

// variavel que tem os poderes de criar endpoints
const app = express();
app.use(cors());
app.use(express.json());


// endereço base -> http://localhost:3003

app.get("/primeira-api", (request, response) => {
    response.send("Esta funcionando o meu primeiro endpoint Do curso da labenu de backEnd , vulgo melhor parte do curso.")
})

app.get("/pegar-dados-headers", (request, response) => {
    const token = request.headers.authorization
    response.send(token)
})

app.get("/pegar-dados-body", (request, response) => {
    const pessoa = request.body
    response.send(pessoa)
})

app.get("/pegar-dados-params/:id", (request, response) => {
    const idPessoa = request.params.id

    console.log(idPessoa)
})

app.get("/pegar-dados-query", (request, response) => {
    const { nome } = request.query

    console.log(nome)
})

// exercicios que faz mais sentido

// retornar todas as playlist
app.get("/retornaPlaylist", (request, response) => {
    response.send(playlist)
})

// retorna uma playlist especifica
app.get("/retornaPlaylist/:nome", (request, response) => {
    const nome = request.params.nome

    const acharPlaylist: Playlist[] = playlist.filter((playlist) => {
        return playlist.nome.includes(nome)
    })

    response.send(acharPlaylist)
})

app.delete("/apagarPlaylist/:nome", (request, response) => {
    const nome = request.params.nome

    const deletePlaylist: Playlist[] = playlist.filter((playlist) => {
        return playlist.nome !== nome
    })

    response.send(deletePlaylist)
})

app.post("/adicionarMusica/:nomePlaylist", (request, response) => {
    const nomePlaylist = request.params.nomePlaylist
    const inforMusicas = request.body

    const acharPlaylist: Playlist[] = playlist.filter((playlist) => {
        return playlist.nome.includes(nomePlaylist)
    })

    acharPlaylist[0].musicas.push(inforMusicas)

    response.status(201).send({Mensagem:"Musica Adicionada com sucesso"})
})










// servidor esta rodando nesse endereço. Startar o backEnd
// endereço base -> http://localhost:3003/primeira-api
app.listen(3003, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3003")
})



