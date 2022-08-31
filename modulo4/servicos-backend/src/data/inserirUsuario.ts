import { usuario } from "../types/usuario";
import { connection } from "./connection";

export async function inserirUsuario(cadastro: usuario) {
    try {

        await connection().insert({
            cep:cadastro.cep,
            logradouro: cadastro.logradouro,
            numero: cadastro.numero,
            bairro: cadastro.bairro,
            cidade: cadastro.cidade,
            estado: cadastro.estado 
        }).into("exercicioCep")


    } catch (error) {
        console.log(error)
        }
}