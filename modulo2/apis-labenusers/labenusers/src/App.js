import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CreateUser from './Components/CreateUser'
import UsersList from './Components/UsersList';

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default class App extends Component {

  state = {
    page: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.page) {
      case 1:
        return <CreateUser />;
      case 2:
        return <UsersList />;
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  
  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    return (
      <Main>
        {this.renderizaEtapa()}
        <br />
        {this.state.page === 1 && (
          <button onClick={this.nextPage}>Lista de Cliente</button>
        )}

        {this.state.page === 2 && (
          <button onClick={this.previousPage}>Voltar</button>
        )}
      
      </Main>


    )
  }
}

