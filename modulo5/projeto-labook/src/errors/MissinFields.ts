import { BaseError } from "./BaseError";

export class MissinFields extends BaseError {
    constructor(
        message: string = "Todos os campos deverão ser preenchidos" 
    ) {
        super(409, message)
    }
}