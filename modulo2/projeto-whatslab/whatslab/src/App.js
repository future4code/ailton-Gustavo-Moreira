import React from "react";
import styled from "styled-components";
import Post from './Post/Post';

const arrayPosts = [
  {
    nomeUsuario: "",
    mensagemUsuario: ""
  },
  
];

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 38rem;
  width: 20rem;
  margin-left: 35%;
`;

const HeadContainer = styled.head`
  display: flex;
  border: 1px solid black;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background-color: bisque;
`

const MainContainer = styled.main`
display: flex;
  border: 1px solid black;
  height: 34rem;
  background-color: blue;
  flex-wrap: wrap;
  flex-direction: column;

`

const FooterContainer = styled.div`
  display: flex;
  border: 1px solid black;
  height: 2rem;
`;

const Input1 = styled.input`
width: 5rem;
`

class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: "",
    userMsg: "",
  };

  changeUserName = (event) => {
    this.setState({ userName: event.target.value});
  };

  changeUserMsg = (event) => {
    this.setState({ userMsg: event.target.value });
  };

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      mensagemUsuario: this.state.userMsg,
    };

    this.setState({
      posts: [...this.state.posts, newPost],
      userName: "",
      userMsg: "",
    });
  };

  render() {
    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          mensagemUsuario={p.mensagemUsuario}
        />
      );
    });

    return (
      <AppContainer>
        <HeadContainer>
          <p>MENSAGER</p> 
        </HeadContainer>
        
        <MainContainer>
          {componentesPost}
        </MainContainer>
                
        <FooterContainer>
          <Input1
            placeholder={"Usuário"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Mensagem do Usuario"}
            value={this.state.userMsg}
            onChange={this.changeUserMsg}
          />

          <button onClick={this.addNewPost}>Enviar</button>
        </FooterContainer>
      </AppContainer>
    );
    
  }
}

export default App;

