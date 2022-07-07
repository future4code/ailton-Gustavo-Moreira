import React from 'react'
import { useState } from 'react'

export default function TelaLista(props) {
    
    
    
    return (
        <div>
            <h2>Tela das Listas</h2>
            <button onClick={props.goToInicial}>Tela Inicial</button>
            <button onClick={props.goToMatches}>Tela Matches</button>
        </div>
    )
}