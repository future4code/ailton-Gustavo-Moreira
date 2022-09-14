import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Todos os campos deverão ser preenchidos",404)
    }
}