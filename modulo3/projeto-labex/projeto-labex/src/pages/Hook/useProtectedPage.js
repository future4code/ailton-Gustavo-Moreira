import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/Coordinator"

export const useProtectedPage = () =>{
    const navigate = useNavigate()

useEffect(() => {
    const token = localStorage.getItem("token")

    if(token === null){
        console.log("Não está logado!!!")
        alert("Não autorizado. Faço o Login")
        goToLoginPage(navigate)
    }
}, [])

}