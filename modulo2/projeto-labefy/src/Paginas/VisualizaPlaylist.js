import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default class VisualizaPlaylist extends Component {
  state = {
    playList: [],
  }

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const header = {
      headers: {
        Authorization: "gustavo-moreira-ailton"
      }
    }
    axios
    .get(url, header)
    .then((res) => {
      this.setState({playList: res.data.result.list});
    })
    .catch((erro) => console.log (erro.response))
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
    .then(() =>{
      alert("Playlist apagada com sucesso!");
      this.getPlaylist();
    })
    .catch((erro) =>{
      alert("Erro ao deletar a Playlist. Tente novamente.")
      console.log(erro)
    })
  }

  // searchPlaylist = () => {
  //   const url = `https://us-centconsole.logral1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string`
  //   const header = {
  //     headers: {
  //       Authorization: "gustavo-moreira-ailton"
  //     }
  //   }
  //   axios
  // }

  render() {
    console.log(this.state.playList)
    return (
      <div>
        <h1>Essas são suas Playlists Criadas</h1>
        {/* <h4>Procurar Playlist</h4>
        <input
        placeholder='Nome da Playlist'
        ></input> */}
        <section>
          {this.state.playList.map((list) =>{
              return <li key={list.id}> 
                <span key={list.id}> {list.name} <button onClick={() => this.deletePlaylist(list.id)}>Deletar</button></span>
                </li>
          })}
        </section>
      </div>
    )
  }
}
