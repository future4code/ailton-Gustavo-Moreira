import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/perfil.png'
import FotoComputador from './img/computador.png'
import SetaVermelha from './img/seta.png'
import Email from './img/email.png'
import Localizacao from './img/localizacao.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Gustavo Mariotin" 
          descricao="Pessoa reservada com estranhos, mas brincalhona com quem tem intimidade."
        />
        
        <ImagemButton 
          imagem={SetaVermelha}
          texto="Ver mais"
        />

        <CardPequeno
          imagem={Email}
          titulo="Email:"
          descricao="gmariotin@gmail.com"
        />

        <CardPequeno
          imagem={Localizacao}
          titulo="Endereço:"
          descricao="Estrada Guilherme Wigert"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={FotoComputador} 
          nome="Programação" 
          descricao="Começando a vida de garoto de promagaÇão, ha pegar gosto pelo React. Mas Javasrcipt ainda foi melhor." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
