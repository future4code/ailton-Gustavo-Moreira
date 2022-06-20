import React, { Component } from 'react'
import styled from 'styled-components'

const Countainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default class Final extends Component {
  render() {
    return (
        <Countainer>
        <h3>O FORMULÁRIO ACABOU</h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </Countainer>
    )
  }
}
