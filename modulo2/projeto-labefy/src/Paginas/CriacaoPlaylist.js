import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


export default class CriacaoPlaylist extends Component {
  state = {
    name: ""
  }

  inputName = (event) =>{
    const newName = event.target.value
    this.setState ({name: newName})
  }

  createUser = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {name:this.state.name}
    const header = {
      headers: {
        Authorization: "gustavo-moreira-ailton"
      }
    }
    axios
    .post(url, body, header)
    .then(() => {
      alert(`Playlist ${this.state.name} foi criada com sucesso!`)
      this.setState({name: ""})
    })
    .catch((erro) => {
      alert("Erro ao criar a Playlist. Tente um nome diferente!")
      console.log(erro)
    });
  }

  render() {
    return (
      <div>
       <h1>Bem vindo a Tela de Criação!</h1> 
       <input 
       value={this.state.name}
       laceholder='Nome da Playlist'
       onChange={this.inputName}></input>
       <button
       onClick={this.createUser}>Criar Playlist</button>
      </div>
    )
  }
}
