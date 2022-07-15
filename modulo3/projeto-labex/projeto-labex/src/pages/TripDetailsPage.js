import React, { useEffect, useState } from "react"
import { useProtectedPage } from "./Hook/useProtectedPage"
import { BASE_URL } from "./components/URL"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/Coordinator"
import { CardTripDetails } from "./components/CardTripDetails"
import { CardCandidate } from "./components/CardCandidate"
import {CardApproved} from "./components/CardApproved"

export const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const [trip, setTrip] = useState([])
    const [candidate, setCandidate] = useState([])
    const [approved, setApproved] = useState([])

    const pathParams = useParams()

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
                setApproved(resp.data.trip.approved)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="Container">
            <h1 className="Centralizar">Detalhes da Viagem</h1>
            <div>
                <CardTripDetails key= {trip.id} trip={trip} />
                <div className="Centralizar">
                    <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
                </div>
            </div>

            <div className="CentralizarPendente">
                {candidate.length !== 0 ?
                <div>
                <h1 className="CentralizarTexto">Candidatos Pendentes</h1>
                {candidate.map((candidato) => {
                    return (
                        <CardCandidate key={candidato.id} candidato={candidato} trip={trip}/>
                    )})}
                    </div>
                    : <h1>Lista Vazia</h1>}
            </div>

            <div className="CentralizarPendente">
                {approved.length !== 0 ?
                <div>
                 <h1 className="CentralizarTexto">Candidatos Aprovados</h1>
                {approved.map((aprovado) => {
                    return (
                        <CardApproved key={aprovado.id} aprovado={aprovado} />
                        )})}
                </div>
                : <h1>Sem Candidatos Aprovados</h1>}
               
            </div>

        </div>
    )
}