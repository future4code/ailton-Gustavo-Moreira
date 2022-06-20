import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    conta:[
          {
            nomeUsuario:"paulinha",
            fotoUsuario: "https://picsum.photos/50/50",
            fotoPost: "https://picsum.photos/200/100",
          },
          {
            nomeUsuario:"gustavo",
            fotoUsuario: "https://i.picsum.photos/id/783/200/200.jpg?hmac=xd2H7xsUnYmNs2Tf6ne9m1bWpTcIsiiQ93D1SCdOvIY",
            fotoPost: "https://picsum.photos/200/150",
          },
          {
            nomeUsuario:"henrique",
            fotoUsuario: "https://i.picsum.photos/id/479/200/300.jpg?hmac=24Y_2mfqS4Jh4cf1gOlnYGYBszrnuy3ebrKkszU885k",
            fotoPost: "https://picsum.photos/200/200",
          }
  ],

    valorInputnomeUsuario: "",
    valorInputfotoUsuario: "",
    valorInputfotoPost: ""
  }

  adicionaConta = () => {
    const novaConta = {
      nomeUsuario: this.state.valorInputnomeUsuario,
      fotoUsuario: this.state.valorInputfotoUsuario,
      fotoPost: this.state.valorInputfotoPost,
    }
    const novaContas = [...this.state.conta, novaConta];
    this.setState({conta:novaContas});
    this.setState({valorInputnomeUsuario: ""});
    this.setState({valorInputfotoUsuario: ""});
    this.setState({valorInputfotoPost: ""});
  };

  onChangeInputUsuario = (event) => {
    this.setState({valorInputnomeUsuario: event.target.value})
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputfotoUsuario: event.target.value})
  };

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputfotoPost: event.target.value})
  };

  render() {
    const listaDePostagem = this.state.conta.map((postagem) => {
      return(
        <Post
        nomeUsuario={postagem.nomeUsuario}
        fotoUsuario={postagem.fotoUsuario}
        fotoPost={postagem.fotoPost}
          />
      );
    });

    return ( 
      <MainContainer>
          {listaDePostagem}
          <input
            value={this.state.valorInputnomeUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.valorInputfotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto"}
          />
          <input
            value={this.state.valorInputfotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaConta}>Adicionar</button>
      </MainContainer> );
  }
}

export default App;
