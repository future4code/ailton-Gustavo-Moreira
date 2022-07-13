import React, { useEffect, useState } from "react"
import { voltar } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./components/URL";
import axios from "axios";
import { useProtectedPage } from "./Hook/useProtectedPage";

export const CreateTripPage = () =>{

    useProtectedPage()

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState("")

    const onChangeName = (event) =>{
        setName(event.target.value)
    }

    const onChangePlanet = (event) =>{
        setPlanet(event.target.value)
    }

    const onChangeDate = (event) =>{
        setDate(event.target.value)
    }

    const onChangeDescription = (event) =>{
        setDescription(event.target.value)
    }

    const onChangeDurationInDays = (event) =>{
        setDurationInDays(event.target.value)
    }

    const CreateTrip = () =>{
        const url = `${BASE_URL}/trips`
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays,
        }
        const token = localStorage.getItem("token")
        axios.post(url, body,{
            headers: {
              auth: token
            }
          })
          .then((resp)=>{
            console.log(resp)
            alert("Viagem Criada!")
            setName("")
            setPlanet("")
            setDate("")
            setDescription("")
            setDurationInDays("")

          })
          .catch((err)=>{
            console.log("Deu erro", err.response)
            console.log("Valor do body", body )
          })
    }


    return (
        <div className="Container">
            <h1 className="Centralizar">Criar Viagens</h1>
        <div className="ManiInput">

            <input 
            placeholder="Nome" 
            className="Input" 
            value={name}
            onChange={onChangeName}></input>

            <select 
            className="Input" 
            onChange={onChangePlanet}>

                <option value={""}>Escolha um Planeta</option>
                <option value={"Mercúrio"}>Mercúrio</option>
                <option value={"Vênus"}>Vênus</option>
                <option value={"Terra"}>Terra</option>
                <option value={"Marte"}>Marte</option>
                <option value={"Jupiter"}>Jupiter</option>
                <option value={"Saturno"}>Saturno</option>
                <option value={"Urano"}>Urano</option>
                <option value={"Netuno"}>Netuno</option>
                <option value={"Plutão"}>Plutão</option>
            </select>

            <input
             placeholder="data" 
             type={"date"}
             value={date}
             className="Input" 
             onChange={onChangeDate}></input>

            <input 
            placeholder="Descrição" 
            value={description}
            className="Input" 
            onChange={onChangeDescription}></input>

            <input 
            placeholder="Duração em Dias"
            value={durationInDays}
            className="Input" 
            onChange={onChangeDurationInDays}></input>

        </div>
        <div className="FooterButtonCriarViagens">
            <button onClick={() => voltar(navigate)}>Voltar</button>
            <button onClick={CreateTrip}>Criar</button>
        </div>
        </div>
    )
}