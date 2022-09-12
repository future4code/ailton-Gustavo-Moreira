// no index.ts:

import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import axios from "axios";
import {baseURL} from "./BaseUrl"
import {user} from "./types"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());
//------------------------------------------------------------------------------------------
//1 C ---

// async function getSubscribers(): Promise<user[]> {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     console.log(response.data);
//     return response.data;
//   };

//2 B ---

//    const getSubscribers = async () :Promise<any>=> {
//     await axios.get(`${baseURL}/subscribers`)
//     .then(resp => resp.data)
//     .then(console.log)
// }

//3 C ---

const getSubscribers = async () :Promise<user[]>=> {
    const resp = await axios.get(`${baseURL}/subscribers`)
    // console.log(resp.data)
    return resp.data.map((res:any) =>{
        return{
            id: res.id,
            name: res.name,
            email: res.email,
        }
    })
}
//4 A ---

const createNews = async (title :string, content :string, date: Date) : Promise<void> => {
    await axios.put(`${baseURL}/news`, {
        title:title,
        content: content,
        date: date
    })
}

//5 / 6

const sendNotifications = async (users: user[], message: string) : Promise<void> =>{
        try{
            const promises = users.map ((user) =>{
                return axios.post(`${baseURL}/notifications`, {
                    subscriberId: user.id,
                    message
            })
        })
             await Promise.all(promises)
            console.log("Notificações enviadas") 
        } catch (erro :any){
            console.log(erro)
        }
}


//PEGAR NOTIFICAÇÕES

const getNotificationsByID = async (id: string) :Promise<any>=> {
    await axios.get(`${baseURL}/subscribers/${id}/notifications`)
    .then(resp => resp.data)
    // .then(console.log)
}





//MAIN
const main =async () => {
    try {
       const subscribers = getSubscribers()
       sendNotifications(await subscribers, "Oi")
       getNotificationsByID('eb98add9-6981-41d6-8d9f-d63258486296')
    } catch (error: any) {
        console.log(error.message)
    }
}
main ()

//------------------------------------------------------------------------------------------
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});