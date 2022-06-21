import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Main = styled.div`
display: flex;
align-items: right;
justify-content: right;
flex-direction: column;
width: 20%;
`
const Head = styled.p`
display: flex;
align-items: center;
justify-content: center;
background-color: bisque;
border: 1px solid black;
`
const List = styled.section`
display:flex;
flex-direction: column;
background-color: gray;
border: 1px solid black;
justify-content: space-between;
`

export default class UsersList extends Component {

    state = {
        usuarios: [],
        // inputId:"",
      }


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

    deleteUser = (id) =>{
        
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                
                {
                headers: {
                    Authorization: "gustavo-mariotin-ailton"
                    }
                }
            )
            .then((response) =>{
                this.getUser();
                alert("Excluido com Sucesso!")
              })
              .catch((error) =>{
                console.log(error.message);
            
              });
    };

  render() {
    return (
      <Main>
        <Head>Lista de Usuarios</Head>
        <List>
          {this.state.usuarios.map((usuario) => {
            return <p key={usuario.id}>{usuario.name} <button onClick={() => this.deleteUser(usuario.id)}>Deletar</button></p>;
          })}
        </List>
        
    </Main>
    )
  }
}
