import axios from "axios"

export async function pegarCep (cep: string) {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        // console.log(result.data)
        return result.data
    } catch (error: any) {
        return null
    }
}