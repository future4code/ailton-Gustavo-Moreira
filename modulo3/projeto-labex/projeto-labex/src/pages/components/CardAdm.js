import React, { useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "./URL"
import { useNavigate } from "react-router-dom"
import { goToTripDetailsPage } from "../../routes/Coordinator"

export const CardAdm = (props) => {
  const navigate = useNavigate()

    const DeleteTrip = (id) =>{
        const url = `${BASE_URL}/trips/${id}`
        const token = localStorage.getItem("token")
        axios.delete(url, {
            headers: {
              auth: token
            }
          })
          .then((resp) =>{
            alert("Viagem apagada!")
            
          })
          .catch((err) =>{
            console.log(err.response)
            alert("Erro ao apagar a Viagem")
          })
    }

    return (
        <div className="CountainerListTrip">
            <div className="CardAdm">
                <h1 onClick={() => goToTripDetailsPage(navigate) }>{props.trip.name}</h1>
                <button onClick={() => DeleteTrip(props.trip.id)}>Remover</button>
            </div>
        </div>
    )
}