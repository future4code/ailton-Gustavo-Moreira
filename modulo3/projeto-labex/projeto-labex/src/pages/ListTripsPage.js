import React from "react";
import { useNavigate } from "react-router-dom";
import { voltar } from "../routes/Coordinator";
import { goToApplicationFormPage } from "../routes/Coordinator";
import { useRequestData } from "./Hook/useRequestData";
import { BASE_URL } from "./components/URL";
import { CardViagens } from "./components/CardViagens";

export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

    const getTrips = trips && trips.map((trip) => {
        return <CardViagens key={trip.id} trip={trip} />
    })
    console.log(trips)

    return (
        <div className="Container">
            <div className="HeaderListTrips">
                <button onClick={() => voltar(navigate)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </div>
            <h1 className="Centralizar">Lista de Viagens</h1>
            <div>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p className="Centralizar">{error.message}</p>}
                {!isLoading && trips && trips.length > 0 && getTrips}
                {!isLoading && trips && trips.length === 0 && <p className="Centralizar">Não há dados</p>}
            </div>
        </div>
    )
}