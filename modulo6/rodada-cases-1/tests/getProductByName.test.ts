import { ProductBusiness } from "../src/business/ProductBusiness"
import { Migrations } from "../src/database/migrations/Migrations"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"

describe("Testando o Pegar Produtos por nome", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new Migrations()
    )

    test("Testando o endpoint Get Products By Name", async () => {        
        const input: any = {
            name: "VESTIDO TRICOT CHEVRON"
        }

        const result = await productBusiness.getProductByName(input)
        expect(result.Product.length).toEqual(1)
        expect(result.message).toEqual("Produtos Filtrado por Nome")        
    })
})

