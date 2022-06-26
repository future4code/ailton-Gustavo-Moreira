import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default class DetalhesPlaylist extends Component {

  state = {
    detalhe: [],
    botaoAdd: "botaoAdd",
    nomeMusica: "",
    artista: "",
    link: "",
  }

  componentDidMount() {
    this.getPlaylistTracks();
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
        this.setState({detalhe: res.data.result})
      })
      .catch((erro) => console.log(erro.response))
  }

  mudarBotao = () => {
    if (this.state.botaoAdd === "botaoAdd") {
      this.setState({ botaoAdd: "botaoSalvar" });
    } else {
      this.setState({ botaoAdd: "botaoAdd" })
    }
  }

  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
    const body = {
      name: this.state.nomeMusica,
      artist: this.state.artista,
      url: this.state.link,
    }
    const header = {
      headers: {
        Authorization: "gustavo-moreira-ailton"
      }
    }
    axios.post(url, body, header)
      .then(() => {
        this.getPlaylistTracks();
        this.setState({nomeMusica: "", artista: "", link: "" });
        this.mudarBotao();
        alert(`Musica adicionada!`)
      })
      .catch(() => {
        alert("Erro ao adicionar a musica.")
      })

  }

  inputNomeMusica = (event) => {
    const newName = event.target.value;
    this.setState({ nomeMusica: newName })
  }

  inputArtista = (event) => {
    const newArtista = event.target.value;
    this.setState({artista: newArtista})
  }

  inputLink = (event) =>{
    const newLink = event.target.value;
    this.setState({link: newLink})
  }
  

  render() {
    
    console.log (this.state.detalhe)
    console.log (this.state.detalhe.tracks)
    

    const botaoAdd = this.state.botaoAdd === "botaoAdd" ? (
      <button onClick={this.mudarBotao}>Criar Música</button>
    ) : (
      <div>
        <input
          placeholder='Nome da Música'
          value={this.state.nomeMusica}
          onChange={this.inputNomeMusica}
        />
        <input
          placeholder='Nome da Banda/Artista'
          value={this.state.artista}
          onChange={this.inputArtista}
        />
        <input
          placeholder='Link da Música'
          value={this.state.link}
          onChange={this.inputLink}
        />
        <button onClick={this.addTrackToPlaylist}>Criar</button>
      </div>
    )

      

    // const imprime = this.state.detalhe
    // .map((musica) => {
    //   return <li key={musica.id}>
    //     <span key={musica.id}> {musica.tracks.name} </span>
    //   </li>
    // })

    return (
      <div>
        <div>
        <p>Musicas da Playlist Escolhida</p>
        <p>
        {/* {imprime} */}
        </p>
        
        </div>
        <div>
          {botaoAdd}
        </div>
        <hr />
        <button onClick={this.props.trocarTela}>
          Voltar para lista de Playlist
        </button>
      </div>
    );
    
  }
}
