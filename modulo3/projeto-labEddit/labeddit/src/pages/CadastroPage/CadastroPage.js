import React from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import "./CadastroPage.css"
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToFeedPage } from "../../routes/Coordinator";
import { goToLoginPage } from "../../routes/Coordinator";
import logo from "../../img/logo.jpeg"

const CadastroPage = () => {

    const { form, onChange, cleanFields } = useForm({ username: "", email: "", password: "" })

    const navigate = useNavigate()

    const Signup = (event) => {
        // evento do form onSubmit
        console.log("deu boa")
        event.preventDefault()
        const url = `${BASE_URL}/users/signup`
        axios.post(url, form)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                alert("Usuario Cadastrado com Sucesso")
                goToFeedPage(navigate)

            })
            .catch((err) => {
                alert("E-mail ou senha invalida")
                console.log("Erro ao Cadastrar", err.response)
            })
    }

    return (
        <div className="ContainerCadastro">
            <div className="HeaderCadastro">
                <div></div>
                <img src={logo} className="FeedPageImage" />
                <button onClick={() => goToLoginPage(navigate)}>Voltar</button>
            </div>
            <div className="MainCadastro">
                <h2>Olá, Seja Bem Vindo(a) ao LabEddit ;)</h2>
            </div>
            <form onSubmit={Signup}>
                <div className="InputCadastro">
                    <input
                        name="username"
                        className="InputDetalhe1Cadastro"
                        placeholder="Nome"
                        value={form.username}
                        onChange={onChange}
                        required
                    />
                    <input
                        name="email"
                        className="InputDetalhe2Cadastro"
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
                        className="InputDetalhe3Cadastro"
                        placeholder="Senha"
                        value={form.password}
                        onChange={onChange}
                        pattern={"^.{8,30}$"}
                        title="Minimo 8, máximo 30"
                        required
                    />
                </div>
                <div className="FooterCadastro">
                    <p>Ao continuar, você concorda com os nossos <strong>Contrato de Usuario</strong> e nossa <strong>Política de Privacidade</strong></p>
                    <input
                        type="checkbox"
                        id="userAgreement"
                        name="Agreement"
                        required />

                    <label
                        htmlFor="userAgreement">Eu concordo em receber emails sobre coisas legais no LabEddit!
                    </label>
                </div>
                <div className="BotaoCadastro">
                    <button className="BotaoCadastroDetalhe">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastroPage