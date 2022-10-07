import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ConflictError } from "../errors/ConflictError"
import { ParamsError } from "../errors/ParamsError"
import { IcreateShowDTO, IcreateShowOutputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { DateFormatation } from "../services/DateFormatation"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private dateFormatation: DateFormatation
    ) {}

    public createShow = async(input:IcreateShowDTO) => {
        const {token, band, dateDB} = input
        const startDate: Date = new Date("2022-12-05")
        

        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new AuthenticationError("Não autorizado")
        }
        if(payload.role !== USER_ROLES.ADMIN){
            throw new AuthenticationError("Não autorizado")
        }
        if(startDate > dateDB){
            throw new ParamsError("Data inicial inferior ao começo do evento")
        }

    
        const starts_at: Date = this.dateFormatation.removeHours(dateDB) as unknown as Date

        const showExists = await this.showDatabase.findByDay(starts_at)

        if(showExists){
            throw new ConflictError("Já existe um show nesse dia")
        }
     
        const id =  this.idGenerator.generate()

        const show = new Show (id, band, starts_at)

        console.log(show)

        // await this.showDatabase.createShow(show)

        // const response : IcreateShowOutputDTO = {message:"Show criado com Sucesso!", show}
        // return response

    }

}