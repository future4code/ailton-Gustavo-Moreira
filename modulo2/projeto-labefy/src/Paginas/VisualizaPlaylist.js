import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DetalhesPlaylist from './DetalhesPlaylist'

export default class VisualizaPlaylist extends Component {
  state = {
    playList: [],
    paginaAtual: "Visualiza",
    name: "",
    playlistId: "",
  }

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const header = {
      headers: {
        Authorization: "gustavo-moreira-ailton"
      }
    }
    axios
      .get(url, header)
      .then((res) => {
        this.setState({ playList: res.data.result.list });
      })
      .catch((erro) => console.log(erro.response))
  }

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    const header = {
      headers: {
        Authorization: "gustavo-moreira-ailton"
      }
    }
    axios
      .delete(url, header)
      .then(() => {
        alert("Playlist apagada com sucesso!");
        this.getPlaylist();
      })
      .catch((erro) => {
        alert("Erro ao deletar a Playlist. Tente novamente.")
        console.log(erro)
      })
  }

  trocarTela = (id) => {
    if (this.state.paginaAtual === "Visualiza") {
      this.setState({ paginaAtual: "Detalhe", playlistId: id });
    } else {
      this.setState({ paginaAtual: "Visualiza", playlistId: "" });
    }
  }

  inputName = (event) =>{
    const newName = event.target.value
    this.setState ({name: newName})
  }

  searchPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name}`
    const header = {
      headers: {
        Authorization: "gustavo-moreira-ailton"
      }
    }
    axios
      .get(url, header)
      .then((res) => {
        this.setState({playList: res.data.result.playlist})
      })
      .catch((erro) => console.log(erro.response))
  }

  render() {
    console.log(this.state.playList)
    return (
      <div>
        {this.state.paginaAtual === "Visualiza" ? (
          <div>
            <h1>Essas são suas Playlists Criadas</h1>
            <input
              value={this.state.name}
              placeholder='Procurar Playlist'
              onChange={this.inputName}
            ></input>
            <button onClick={this.searchPlaylist}>Procurar</button>
            <section>
              {this.state.playList
                .map((list) => {
                  return <li key={list.id}>
                    <span key={list.id}> {list.name} 
                    <button onClick={( )=> this.trocarTela(list.id)}>Detalhes</button>
                    <button onClick={() => this.deletePlaylist(list.id)}>Deletar</button>
                    </span>
                  </li>
                })}

            </section>
          </div>
        ) : (
          <DetalhesPlaylist
            playlistId={this.state.playlistId}
            trocarTela={this.trocarTela}
          />
        )}
      </div>
    )
  }
}
