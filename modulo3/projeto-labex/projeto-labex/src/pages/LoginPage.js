import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/Coordinator"
 
export const LoginPage = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }

    const navigate = useNavigate()

    useEffect (() =>{
        const token = window.localStorage.getItem('token')
        if(token !== null){
            goToAdminHomePage(navigate)
        }
    }, [navigate])


    const Login = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:gustavo-mariotin-ailton/login";
        const body = {
            email: email,
            password: password
        }
        axios.post(url, body)
        .then((resp) =>{
            console.log("Deu certo", resp.data)
            localStorage.setItem("token", resp.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err) =>{
            console.log ("Deu errado", err.response)
        })
    }

    return (
        <div className="Container">
            <h1 className="HeaderLogin">Faço seu Login</h1>
            <div className="ManiInput">
                <input className="Input" placeholder="Email" onChange={onChangeEmail} value={email}></input>
                <input className="Input" placeholder="Senha" onChange={onChangePassword} value={password}></input>
            </div>
            <div className="FooterButtonLogin">
                <button onClick={Login}>Enviar</button>
            </div>
        </div>
    )
}