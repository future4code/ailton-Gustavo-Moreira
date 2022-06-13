import React, { Component } from 'react'
import styled from 'styled-components'

const Countainer  = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`


export default class Etapa1 extends Component {
  render() {
    return (
      <Countainer >
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>3. Qual seu email?</p>
        <input></input>
        <p>4. Qual a sua escolaridade?</p>
        <select name='Ensino'>
            <option value="1">Ensino Médio Incompleto</option>
            <option value="2">Ensino Médio Completo</option>
            <option value="3">Ensino Superior Incompleto</option>
            <option value="4">Ensino Superior Completo</option>
        </select>
      </Countainer >
    )
  }
}
