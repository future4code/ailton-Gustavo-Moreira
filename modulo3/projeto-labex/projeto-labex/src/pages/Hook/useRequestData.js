import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url) =>{
const [data, setData] = useState(undefined);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

useEffect(() => {
    setIsLoading(true);
    axios
    .get(url)
    .then((resp) =>{
        setIsLoading(false)
        setData(resp.data.trips)
       
    })
    .catch((err) =>{
        setIsLoading(false)
        setError(err)
    })
}, [url])
    return [data, isLoading, error]
}