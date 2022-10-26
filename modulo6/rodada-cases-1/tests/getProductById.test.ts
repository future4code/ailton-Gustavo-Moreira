import { ProductBusiness } from "../src/business/ProductBusiness"
import { Migrations } from "../src/database/migrations/Migrations"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"

describe("Testando o Pegar Produto por Id", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new Migrations()
    )

    test("Testando o endpoint Get Product By Id", async () => {
        
        const input: any = {
            id: 8371
        }

        const result = await productBusiness.getProductById(input)
        expect(result.message).toEqual("Produtos Filtrado pelo Id")   
        expect(result.Products.getId()).toEqual(8371)
    })
})