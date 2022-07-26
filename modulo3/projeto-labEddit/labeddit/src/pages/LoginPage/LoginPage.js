import React from "react";
import "./LoginPage.css"
import { useForm } from "../../hooks/useForm";
import { goToFeedPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { goToCadastroPage } from "../../routes/Coordinator";

const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })

    const navigate = useNavigate()

    // useEffect(() => {
    //     const token = window.localStorage.getItem('token')
    //     if (token === null) {
    //         goToFeedPage(navigate)
    //     }
    // }, [navigate])

    const Login = (event) => {
        // evento do form onSubmit
        console.log("deu boa")
        event.preventDefault()
        const url = `${BASE_URL}/users/login`
        axios.post(url, form)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                goToFeedPage(navigate)
                
            })
            .catch((err) => {
                alert("E-mail ou senha invalida")
                console.log("Deu errado", err.response)
            })
    }


    return (
        <div className="ContainerLogin">
            <div className="HeaderLogin">
                <h1>Imagem</h1>
                <h1>LabEddit</h1>
                <span>Porjeto de rede social</span>
            </div>
            <form onSubmit={Login}>
                <div className="InputLogin">
                    <input
                        name="email"
                        className="InputDetalhe1Login"
                        placeholder="Email"
                        value={form.email}
                        onChange={onChange}
                        pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                        title="Utilize apenas caracteres minúsculos, números, não esqueça da @."
                        required
                    />
                    <input
                        name="password"
                        type={"password"}
                        className="InputDetalhe2Login"
                        placeholder="Senha"
                        value={form.password}
                        onChange={onChange}
                        pattern={"^.{8,30}$"}
                        title="Minimo 8, máximo 30"
                        required
                    />
                </div>
                <div className="Botao1Login">
                    <button className="BotaoDetalhe1Login">Login</button>
                </div>
            </form>
            <div className="Botao2Login">
            <button className="BotaoDetalhe1Login" onClick={() => goToCadastroPage(navigate)}>Crie sua Conta!</button>
            </div>
        </div>
    )
}

export default LoginPage