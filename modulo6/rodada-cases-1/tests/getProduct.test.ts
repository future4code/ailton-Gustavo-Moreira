import { ProductBusiness } from "../src/business/ProductBusiness"
import { Migrations } from "../src/database/migrations/Migrations"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"

describe("Testando o Pegar todos os produtos", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new Migrations()
    )

    test("Testando o endpoint Get All Product", async () => {
        
       const result = await productBusiness.getProduct()
        expect(result.message).toEqual("Todos os Produtos Cadastrados") 
        expect(result.Products.length).toEqual(2)       
    })
})

