import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import './TelaMatches.css';


export default function TelaMatches(props) {
    
    const [listaMatches, setListaMatches] = useState([])

    useEffect (() =>{
        GetMatches()
    },[])


    const GetMatches = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:gustavo1/matches"
        axios
        .get(url)
        .then((res) =>{
            setListaMatches(res.data.matches)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

  
    return (
        <div className='Container'>
            <header className='Header'>
                <span>❤️</span>
                <h2>Astro Match</h2>  
                {listaMatches?.map((matches) =>{
                    return <div>
                    <img src={matches.photo} /> &nbsp;&nbsp;
                    <h3>{matches.name}</h3>
                  </div>
                })}
                <button onClick={props.goToInicial}>Tela Inicial</button>
            </header>

            <h2>Tela dos Matches</h2>
            
        </div>
    )
}