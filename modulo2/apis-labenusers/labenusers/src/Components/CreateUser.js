import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Head = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: 1px solid black;
height: 3rem; 
width: 15rem;
margin-top: 10rem;
background-color: bisque;
`

const Menu = styled.div`
display: flex;
border: 1px solid black;
flex-direction: column;
align-items: center;
width: 15rem;
justify-content: center;
height: 10rem; 
padding-bottom: 1rem;
background-color: gray;
`

export default class CreateUser extends Component {

    state = {
        usuarios: [],
        inputName:"",
        inputEmail:"",
      }
    
      onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value });
      };
    
      onChangeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value });
      };
    
      componentDidMount() {
        this.getUser();
      }
    
      getUser = () =>{
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "gustavo-mariotin-ailton"
              }
            }
          )
          .then((response) => {
            this.setState({ usuarios: response.data});
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
    
      createUser = () => {
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        };
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
              headers:{
                Authorization: "gustavo-mariotin-ailton"
              }
            }
          )
          .then((response) =>{
            this.getUser();
            alert("Cadastro realizado com Sucesso!")
          })
          .catch((error) =>{
            console.log(error.message);
            alert("Cadastro não realizado. Tente novamente!")
          });
      };

  render() {
    return (
      <Container>
        <Head>Cadastro do Usuário</Head>
        <Menu>
          <p>Nome</p>
          <input value={this.state.inputName} onChange={this.onChangeInputName} ></input>
          <p>Email</p>
          <input value={this.state.inputEmail} onChange={this.onChangeInputEmail} ></input>
          <button onClick={this.createUser}>Cadastrar</button>
        </Menu>
      </Container>
    )
  }
}
