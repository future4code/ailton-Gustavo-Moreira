
import './App.css';
import React from 'react';
import { useState , useEffect } from 'react'
import TelaInicial from './pages/TelaInicial'
import TelaMatches from './pages/TelaMatches'

function App() {

  // Declarando o useState para troca de telas.
  const [telaAtual , settelaAtual ] = useState("inicial");

  // Funções de troca de telas.
  const goToInicial = () => {
    settelaAtual("inicial")
  }

  const goToMatches = () => {
    settelaAtual("matches")
  }


  // Switch para a escolha das telas.
  const selectPage = () => {
    switch (telaAtual){
      case "inicial":
        return <TelaInicial goToMatches={goToMatches}/>
      case "matches":
        return <TelaMatches goToInicial={goToInicial}/>
      default:
        return <TelaInicial goToMatches={goToMatches}/>
    }
  }

return (
  <div className="App">
    {selectPage()}
  </div>
  );
}

export default App;