import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { voltar } from "../routes/Coordinator";
import { BASE_URL } from "./components/URL";
import { useRequestData } from "./Hook/useRequestData";
import { useForm } from "./Hook/useForm";
import axios from "axios";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
    const [tripName, setTripName] = useState("")
    const chooseTrip = (event) => {
        setTripName(event.target.value)
    }

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    });

    const ApplytoTrip = (id) => {
        const url = `${BASE_URL}/trips/${id}/apply`
        axios.post(url, form)
        .then((resp) => {
            console.log("Formulário enviado!", resp);
            cleanFields()
        })
        .catch((err) =>{
            alert("Erro", err.message);
        })
    }

    const submitLogin = (event) => {
        ApplytoTrip()
        event.preventDefault()
    }

    return (
        <div className="Container">
            <div>
                <button onClick={() => voltar(navigate)}>Voltar</button>
            </div>
            <h1 className="Centralizar">Inscreva-se para uma Viagem</h1>

            <form className="ManiInput" onSubmit={submitLogin}>

                <select onChange={chooseTrip} className="Input">
                    <option value={""}>Escolha uma Viagem</option>
                    {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
                        return (
                            <option key={trip.id} value={trip.id}>
                                {trip.name}
                            </option>
                        );
                    })}
                </select>

                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                    pattern={"^.{4,}"}
                    title={"O nome deve ter no mínimo 4 letras"}
                    className="Input"
                />

                <input
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    placeholder="Idade"
                    required
                    type={"number"}
                    min={18}
                    className="Input"
                />

                <input
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder="Texto de Candidatura"
                    required
                    pattern={"^(.{1,50})"}
                    title={"O texto deve ter no máximo 50 letras"}
                    className="Input"
                />

                <input
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    placeholder="Profissão"
                    required
                    className="Input"
                />

                <input
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    placeholder="Escolha um País"
                    className="Input"
                />

                <button className="FooterButton">Enviar</button>
            </form>
           
        </div>
    )
}