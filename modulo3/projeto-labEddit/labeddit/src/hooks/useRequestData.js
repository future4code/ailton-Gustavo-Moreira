import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url) =>{
const [data, setData] = useState(undefined);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

const token = localStorage.getItem("token")

const header = {
    headers: {
        Authorization: token
    },
}

useEffect(() => {
    setIsLoading(true);
    axios
    .get(url, header)
    .then((resp) =>{
        setIsLoading(false)
        setData(resp.data)
        console.log(resp)
       
    })
    .catch((err) =>{
        setIsLoading(false)
        setError(err)
    });
    
}, [url])


    return [data, isLoading, error]
}