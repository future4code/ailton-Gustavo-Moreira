import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/database/UserDatabase"
import { BaseError } from "../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    
    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    test("Cadastrar com a senha com menos de 6 caracteres", async () =>{
        // para não ter o teste falso-positivo
        expect.assertions(2)

        try {

            const input:ISignupInputDTO = {
                email:"fulano@gmail.com",
                name:"Fulano",
                password:"1234"
            }

            await userBusiness.signup(input)
            
        } catch (error) {
            if(error instanceof BaseError){
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
            
        }
    })

    test("Cadastra com nome menor que 3 caracteres", async () =>{
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                email:"fulano@gmail.com",
                name:"Fu",
                password:"bananinha"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError){
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
            
        }
    })

    test("Cadastrar com email que não tenha o @", async () =>{
        expect.assertions(2)
        try {
            const input:ISignupInputDTO = {
                email:"fulano",
                name:"Fulano",
                password:"bananinha"
            }
            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError){
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
            
        }
    })

    test("Cadastrar com um email já existente", async () =>{
        expect.assertions(2)
        try {
            const input:ISignupInputDTO = {
                email:"astrodev@gmail.com",
                name:"Astrodev",
                password:"bananinha"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError){
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Email já cadastrado")
             }
        }
    })

    test("Tentar fazer Login com email inexistente", async() =>{
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "astrobildo@gmail.com",
                password: "bananinha"
            }

            await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BaseError){
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Email não cadastrado")
             }
            
        }
    })

    test("Tentar fazer Login com senha incorreta", async() =>{
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "esqueciasenha"
            }

            await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BaseError){
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Password incorreto")
             }
            
        }
    })
})