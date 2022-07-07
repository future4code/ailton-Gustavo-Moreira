import React from 'react'
import { useState } from 'react'

export default function TelaMatches(props) {
    
  
    return (
        <div>
            <h2>Tela dos Matches</h2>
            <button onClick={props.goToInicial}>Tela Inicial</button>
            <button onClick={props.goToLista}>Tela das Listas</button>
        </div>
    )
}