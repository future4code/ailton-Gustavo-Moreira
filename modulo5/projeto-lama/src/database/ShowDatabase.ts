import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public showDBModel = (show:Show): IShowDB =>{
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }
        return showDB
    }

    public createShow = async (show:Show): Promise<void> =>{
        const showDB = this.showDBModel(show)

        await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .insert(showDB)
    }

    public findByDay = async (starts_at:Date): Promise<IShowDB | undefined> =>{
        const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({starts_at})

        return result[0]
    }
}