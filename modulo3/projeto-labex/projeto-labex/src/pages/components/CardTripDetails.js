import React from "react"


export const CardTripDetails = (props) => {
    return (
        <div className="CountainerListTrip">
            <div className="CardViagens">
                <p className="Margem"><strong>Nome:</strong> &nbsp;{props.trip.name}</p>
                <p className="Margem"><strong>Descrição:</strong> &nbsp;{props.trip.description}</p>
                <p className="Margem"><strong>Destino:</strong> &nbsp;{props.trip.planet}</p>
                <p className="Margem"><strong>Duração:</strong> &nbsp;{props.trip.durationInDays} &nbsp; dias</p>
                <p className="Margem"><strong>Data:</strong> &nbsp;{props.trip.date}</p>
            </div>
        </div>
    )
}