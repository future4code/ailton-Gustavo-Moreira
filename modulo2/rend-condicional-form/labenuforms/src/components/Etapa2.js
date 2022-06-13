import React, { Component } from 'react'
import styled from 'styled-components'

const Countainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default class Etapa2 extends Component {
  render() {
    return (
        <Countainer>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <p>5. Qual curso?</p>
        <input></input>
        <p>6. Qual a unidade de ensino?</p>
        <input></input>
      </Countainer>
    )
  }
}
