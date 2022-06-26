import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default class DetalhesPlaylist extends Component {

  state = {
    detalhe: {},
    nomeMusica:"",
  }

  getPlaylistTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
    const header = {
      headers: {
        Authorization: "gustavo-moreira-ailton"
      }
    }
    axios
      .get(url, header)
      .then((res) => {
        console.log (res);
      })
      .catch((erro) => console.log(erro.response))
  }
  render() {
    return (
      <div>
        <p>DetalhesPlaylist</p>
        <button onClick={this.props.trocarTela}>
          Voltar para lista de Playlist
        </button>
      </div>
    )
  }
}
