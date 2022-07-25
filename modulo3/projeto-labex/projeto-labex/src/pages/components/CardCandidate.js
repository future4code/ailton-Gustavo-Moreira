import React, { useEffect, useState } from "react"
import { BASE_URL } from "./URL"
// import { useParams } from "react-router-dom"
import axios from "axios"


export const CardCandidate = (props) => {
       
    const candidato = props.candidato
    const trip = props.trip

    const DecideCandidate = () => {
        const url = `${BASE_URL}/trips/${trip.id}/candidates/${candidato.id}/decide`
        const token = localStorage.getItem("token")
        const body = {
            approve: true
          }
        axios.put(url, body, {
            headers: {
                auth: token
            }
        })
        .then((resp) =>{
            alert("Candidato Aprovado !")
        })
        .catch((err) =>{
            console.log("Erro", err)
        })
    }

    const ReproveCandidate = () => {
        const url = `${BASE_URL}/trips/${trip.id}/candidates/${candidato.id}/decide`
        const token = localStorage.getItem("token")
        const body = {
            approve: false
          }
        axios.put(url, body, {
            headers: {
                auth: token
            }
        })
        .then((resp) =>{
            alert("Candidato Reprovado !")
        })
        .catch((err) =>{
            console.log("Erro", err)
        })
    }

    return (
        <div className="CountainerListTrip">
            <div className="CardViagens">
                <p className="Margem"><strong>Nome:</strong> &nbsp;{candidato.name}</p>
                <p className="Margem"><strong>Idade:</strong> &nbsp;{candidato.age} &nbsp; dias</p>
                <p className="Margem"><strong>Pais:</strong> &nbsp;{candidato.country}</p>
                <p className="Margem"><strong>Texto:</strong> &nbsp;{candidato.applicationText}</p>
                <div className="CardBotaoCandidatos">
                <button onClick={() => DecideCandidate()}>Aprovar</button>
                <button onClick={() => ReproveCandidate()}>Reprovar</button>
                </div>
            </div>
        </div>
    )
}