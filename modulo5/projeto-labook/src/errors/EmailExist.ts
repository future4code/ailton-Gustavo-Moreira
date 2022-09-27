import { BaseError } from "./BaseError";

export class EmailExist extends BaseError {
    constructor(
        message: string = "Email já cadastrado" 
    ) {
        super(409, message)
    }
}