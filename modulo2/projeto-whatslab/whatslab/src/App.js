import './App.css';
import React from "react";
import styled from "styled-components";

const arrayPosts = [
  {
    nomeUsuario: "x",
    mensagemUsuario: "x",
  },
];

const AppContainer = styled.div`
    height: 38rem;
    width: 45%;
    border: 1px solid black;
    margin-left: 25rem;
`;

const MainContainer = styled.main`
    display: flex;
    height: 95%;
    width: 100%;
    border: 1px solid black;
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`

class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: "",
    userMsg: "",
  };

  changeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  changeUserMsg = (event) => {
    this.setState({ userMsg: event.target.value });
  };

  render() {
    return (
      <AppContainer> 
      <MainContainer>
        Teste
      </MainContainer>
      <FooterContainer>
      <input 
        placeholder="Usuário"
        value={this.state.userName}
        onChange={this.changeUserName}
      />
      <input 
        placeholder="Mensagem"
        value={this.state.userMsg}
        onChange={this.changeUserMsg}
      />
        <button class="botao">Enviar</button>
      </FooterContainer>
      
    </AppContainer>
  );
}
}

export default App;
