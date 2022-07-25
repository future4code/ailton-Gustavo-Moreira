import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage } from "../routes/Coordinator";
import { goToLoginPage } from "../routes/Coordinator";



export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="Container">
            <h1 className="HeaderHome">Labe X </h1>
            <div className="FooterHome">
                <button onClick={() => goToListTripPage(navigate)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(navigate)}>Login</button>
            </div>
        </div>
    )
}