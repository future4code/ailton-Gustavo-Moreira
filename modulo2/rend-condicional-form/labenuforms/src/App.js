import React, { Component } from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import './App.css';

export default class App extends Component {
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    const somar = this.state.etapa +1;
    this.setState({
      etapa: somar
    })
  }

  proximaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />
        break;
      case 2:
        return <Etapa2 />
        break;
      case 3:
        return <Etapa3 />
        break;
      case 4:
        return <Final />
        break;
    }
  }

  botao = () => {
    if (this.state.etapa <= 3){
      return <button onClick={this.irParaProximaEtapa} >Próxima Etapa</button>
    }
  }

  render() {
    return (
      <div>
        {this.proximaEtapa()}
        <div className='botao'>{this.botao()}</div>
      </div>
    )
  }
}

