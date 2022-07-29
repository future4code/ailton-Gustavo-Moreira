import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/Coordinator"
import { useForm } from "./Hook/useForm"

export const LoginPage = () => {
    const {form,    } = useForm({email:"", password:""})
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [form, setForm] = useState({email:"", password:""})

    // const onChangeEmail = (event) => {
    //     setEmail(event.target.value)
    // }

    // const onChangePassword = (event) => {
    //     setPassword(event.target.value)
    // }

    // const onChange = (event) => {
    //     const {name, value} = event.target
    //     // const name = event.target.name
    //     // const value = event.target.event
    //     setForm({...form, [name]: value});
    // }

    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token !== null) {
            goToAdminHomePage(navigate)
        }
    }, [navigate])


    const Login = (event) => {
        event.preventDefault()
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:gustavo-mariotin-ailton/login";
        // const body = {
        //     email: email,
        //     password: password
        // }
        axios.post(url, form)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                goToAdminHomePage(navigate)
            })
            .catch((err) => {
                alert("E-mail ou senha invalida")
                console.log("Deu errado", err.response)
            })
    }

    return (
        <div className="Container">
            <h1 className="HeaderLogin">Faço seu Login</h1>
            <form onSubmit={Login}>
                <div className="ManiInput">
                    <input 
                    name="email"
                    className="Input" 
                    placeholder="E-mail" 
                    onChange={onChange} 
                    value={form.email}
                    />
                    
                    <input 
                    name="password"
                    className="Input" 
                    placeholder="Senha" 
                    onChange={onChange} 
                    value={form.password}
                    />
                </div>
                <div className="FooterButtonLogin">
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    )
}