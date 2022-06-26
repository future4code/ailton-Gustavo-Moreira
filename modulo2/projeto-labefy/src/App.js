import React, { Component } from 'react'
import CriacaoPlaylist from './Paginas/CriacaoPlaylist'
import DetalhesPlaylist from './Paginas/DetalhesPlaylist'
import VisualizaPlaylist from './Paginas/VisualizaPlaylist'

export default class App extends Component {
  state = {
    currentPage: "Criacao"
  }

  renderPage = () =>{
    switch (this.state.currentPage){
      case "Criacao": 
        return <CriacaoPlaylist />;
      case "Detalhe":
        return <DetalhesPlaylist />;
      case "Visualiza":
        return <VisualizaPlaylist />;
      default:
        return <CriacaoPlaylist />;
    }
  }

  changePage = (namePage) => {
    this.setState({currentPage: namePage})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changePage("Criacao")}>Criar Playlist</button>
        <button onClick={() => this.changePage("Visualiza")}>Visualizar Playlist</button> 
        {this.renderPage()}
      </div>
    )
  }
}

