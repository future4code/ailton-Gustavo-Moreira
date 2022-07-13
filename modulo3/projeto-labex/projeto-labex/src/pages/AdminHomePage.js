import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../routes/Coordinator"
import { useRequestData } from "./Hook/useRequestData"
import { CardAdm } from "./components/CardAdm"
import { BASE_URL } from "./components/URL";
import { goToCreateTripPage } from "../routes/Coordinator"
import { useProtectedPage } from "./Hook/useProtectedPage"

export const AdminHomePage = () =>{

    useProtectedPage()

    const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

    const getTrips = trips && trips.map((trip) => {
        return <CardAdm key={trip.id} trip={trip} />
    })

    const navigate = useNavigate()

    const limparlocalStorage = () => {
        localStorage.clear()
        alert("Logout realizado")
        goToHomePage(navigate)
    }

    return (
        <div className="Container">
            <h1 className="HeaderAdm">Painel Administrativo</h1>
            <div className="MainButton">
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagens</button>
                <button onClick={() => limparlocalStorage()}>Logout</button>
            </div>
            <div className="footerAdm">
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p className="Centralizar">{error.message}</p>}
                {!isLoading && trips && trips.length > 0 && getTrips}
                {!isLoading && trips && trips.length === 0 && <p className="Centralizar">Não há dados</p>}
            </div>
        </div>
    )
}