import { BaseError } from "./BaseError";

export class WrongType extends BaseError{
    constructor(){
        super("Tipo de usuario invalido",401)
    }
}