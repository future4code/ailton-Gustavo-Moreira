import React, { useEffect, useState } from "react"
import { useProtectedPage } from "./Hook/useProtectedPage"
import { BASE_URL } from "./components/URL"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/Coordinator"
import { CardTripDetails } from "./components/CardTripDetails"


export const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const [trip, setTrip] = useState({})
    const [candidate, setCandidate] = useState([])

    const pathParams = useParams(trip.id)

    useEffect(() => {
        GetTripDetail()
    }, [])
    const GetTripDetail = () => {
        const url = `${BASE_URL}/trip/${pathParams.id}`
        const token = localStorage.getItem("token")
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((resp) => {
                console.log(resp)
                setTrip(resp.data.trip)
                setCandidate(resp.data.trip.candidates)
                console.log(resp.data.trip.candidates)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className="Container">
            <h1 className="Centralizar">Detalhes da Viagem</h1>
            <div>
                <CardTripDetails trip={trip} />
                <div className="Centralizar">
                    <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
                </div>
            </div>
            <div className="CentralizarPendente">
                <h1 >Candidatos pendentes</h1>
                {candidate.map((candidato) => {
                    return (
                        <div key={candidato.name} className="CardPendentes">
                            <p>Nome: {candidato.name}</p>
                            <p>Idade: {candidato.age}</p>
                            <p>País: {candidato.country}</p>
                            <p>Texto: {candidato.applicationText}</p>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}