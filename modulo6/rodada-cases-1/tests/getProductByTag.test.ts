import { ProductBusiness } from "../src/business/ProductBusiness"
import { Migrations } from "../src/database/migrations/Migrations"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"

describe("Testando o Produto por Tag", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new Migrations()
    )

    test("Testando o endpoint Get Products By Tag", async () => {        
        const input: any = {
            name: "Balada"
        }

        const result = await productBusiness.getProductByTag(input)
        console.log(result.Products.length)
        expect(result.Products.length).toEqual(2)
        expect(result.message).toEqual("Produtos Filtrado por Tag")        
    })
})