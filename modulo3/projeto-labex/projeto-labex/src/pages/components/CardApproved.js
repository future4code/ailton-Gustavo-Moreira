import React from "react"


export const CardApproved = (props) => {
    return (
        <div className="CountainerListTrip">
            <div className="CardViagens">
                <p className="Margem"><strong>Nome:</strong> &nbsp;{props.aprovado.name}</p>
                <p className="Margem"><strong>Idade:</strong> &nbsp;{props.aprovado.age} &nbsp; dias</p>
            </div>
        </div>
    )
}