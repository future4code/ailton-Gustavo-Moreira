import React, { Component } from 'react'
import CriacaoPlaylist from './Paginas/CriacaoPlaylist'
import DetalhesPlaylist from './Paginas/DetalhesPlaylist'
import VisualizaPlaylist from './Paginas/VisualizaPlaylist'

export default class App extends Component {
  state = {
    currentPage: "Criacao"
  }

  changePage = () =>{
    switch (this.state.currentPage){
      case "Criacao": this.setState ({currentPage: CriacaoPlaylist})

    }
  }

  render() {
    return (
      <div>
        <button></button>
      </div>
    )
  }
}

