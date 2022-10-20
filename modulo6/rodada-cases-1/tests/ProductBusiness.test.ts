import { ProductBusiness } from "../src/business/ProductBusiness"
import { Migrations } from "../src/database/migrations/Migrations"
import { BaseError } from "../src/errors/BaseError"
import { IInputIdDB, Product } from "../src/models/Product"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"

describe("Testando o ProducttBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new Migrations()
    )

    test("Deve retornar uma lista de Produtos pelo Nome", async () => {
        const input: any = {
            name: "VESTIDO TRICOT CHEVRON"
        }

        const response = await productBusiness.getProductByName(input)
        expect(response.Products).toBeInstanceOf(Product)
        
    })

    // test("Deve ser possível criar um novo post", async () => {
    //     const input: ICreatePostInputDTO = {
    //         token: "token-mock-normal",
    //         content: "Teste do mock"
    //     }

    //     const response = await ProductBusiness.createPost(input)

    //     expect(response.message).toBe("Post criado com sucesso")
    //     expect(response.post).toBeInstanceOf(Post)
    //     expect(response.post.getId()).toBe("id-mock")
    //     expect(response.post.getContent()).toBe("Teste do mock")
    //     expect(response.post.getLikes()).toBe(0)
    //     expect(response.post.getUserId()).toBe("id-mock")
    // })


})

