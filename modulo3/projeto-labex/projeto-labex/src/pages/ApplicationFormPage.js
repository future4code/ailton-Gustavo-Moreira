import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { voltar } from "../routes/Coordinator";
import { BASE_URL } from "./components/URL";
import { useRequestData } from "./Hook/useRequestData";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
    const [tripName, setTripName] = useState("")

    const chooseTrip = (event) =>{
        setTripName(event.target.value)
    }

    return (
        <div className="Container">
            <h1 className="Centralizar">Inscreva-se para uma Viagem</h1>
            <div className="ManiInput">
                <select onChange={chooseTrip} className="Input">
                    <option value={""}>Escolha uma Viagem</option>
                    {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
          return (
            <option key={trip.name} value={trip.name}>
              {trip.name}
            </option>
          );
        })}
                </select>
                <input placeholder="Nome" className="Input"></input>
                <input placeholder="Idade" className="Input"></input>
                <input placeholder="Texto de Candidatura" className="Input"></input>
                <input placeholder="Profissão" className="Input"></input>
                <input placeholder="Escolha um País" className="Input"></input>
            </div>
            <div className="FooterButton">
                <button onClick={() => voltar(navigate)}>Voltar</button>
                <button>Enviar</button>
            </div>
        </div>
    )
}