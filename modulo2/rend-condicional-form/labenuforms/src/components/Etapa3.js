import React, { Component } from 'react'
import styled from 'styled-components'

const Countainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default class Etapa3 extends Component {
  render() {
    return (
        <Countainer>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input></input>
        <p>6. Você fez algum curso complementar?</p>
        <select name='Curso'>
            <option value="1">Nenhum</option>
            <option value="2">Curso Técnico</option>
            <option value="3">Curso de Inglês</option>
        </select>
      </Countainer>
    )
  }
}
