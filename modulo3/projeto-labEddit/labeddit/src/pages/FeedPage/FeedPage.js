import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {useRequestData} from "../../hooks/useRequestData";
import { FeedCard } from "../../components/FeedCard/FeedCard";
import "./FeedPage.css"
import logo from "../../img/logo.jpeg"
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { goToLoginPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

const FeedPage = () =>{
    useProtectedPage()
    const navigate = useNavigate()
    // pegando os posts 
    
    const [feeds, isLoading, error] = useRequestData(`${BASE_URL}/posts`)

    const getFeeds = feeds && feeds.map((feed) => {
        return <FeedCard key={feed.id} feed={feed} />
    })

    // criando logout 

    const limparlocalStorage = () => {
        localStorage.clear()
        alert("Logout realizado")
        goToLoginPage(navigate)
    }

    // criando post 
    const { form, onChange, cleanFields } = useForm({ title: "", body: ""})

    const CreatePost = (event) =>{
        console.log("Deu boa")
        // event.preventDefault()
        const url = `${BASE_URL}/posts`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                Authorization: token
            },
        }
        axios.post(url, form, header)
        .then((resp) =>{
            alert("Postagem Criada!")
            cleanFields()
        })
        .catch((err) =>{
            console.log("Deu erro", err.response)
        })
    }

    useEffect(() => {
    
    }, [])

    

    return (
        <div className="FeedPageContainer">
            <div className="FeedPageHeader">
                <div></div>
                <div>
                    <img src={logo} className="FeedPageImage"/>
                </div>
                <div>
                    <button onClick={limparlocalStorage}>Logout</button>
                </div>
            </div>
            <div>
                {/* <h3>Bem vindo Nome. O que iremos postar hoje?</h3> */}
            </div>
            <div >
            <form onSubmit={CreatePost} className="FeedPageMain">

                <input 
                name="title"
                className="FeedPageInput1"
                placeholder="Titulo do post"
                value={form.title}
                onChange={onChange}
                required
                />

                <textarea 
                name="body"
                className="FeedPageInput2"
                placeholder="Escrava seu post..."
                value={form.body}
                onChange={onChange}
                required
                />

            <div className="FeedPageMain2">
                <button className="FeedPageButton" onClick={CreatePost}>Postar</button>
            </div>
            </form>
            </div>
            <div className="Alinhar">
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p className="Centralizar">{error.message}</p>}
            {!isLoading && feeds && feeds.length > 0 && getFeeds}
            {!isLoading && feeds && feeds.length === 0 && <p className="Centralizar">Não há dados</p>}
            </div>
        </div>
    )
}

export default FeedPage