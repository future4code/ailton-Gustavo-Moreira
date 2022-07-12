import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage } from "../routes/Coordinator";



export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="Container">
            <h1 className="HeaderHome">Labe X </h1>
            <div className="FooterHome">
                <button onClick={() => goToListTripPage(navigate)}>Ver Viagens</button>
                <button>Login</button>
            </div>
        </div>
    )
}