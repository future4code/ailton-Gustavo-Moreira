import { BaseDatabase } from "../../src/database/BaseDatabase"
import { Product } from "../../src/models/Product"


export class ProductDatabaseMock extends BaseDatabase {
  public static TABLE_PRODUCTS = "CASE_AMARO_produto"
  public static TABLE_TAGS = "CASE_AMARO_tags"
  public static TABLE_ALL = "CASE_AMARO_produto_tags"


  public getProduct = async (): Promise<Product[]> => {
    const product: any = [
      {
        id: 8371,
        name: "VESTIDO TRICOT CHEVRON",
        tags: ["balada", "neutro", "delicado", "festa"]
      },
      {
        id: 8372,
        name: "VESTIDO TRICOT TESTE",
        tags: ["balada", "neutro", "delicado", "festa"]
      }

    ]

    const products = product.map((product: any) => {
      return new Product(
        product.id,
        product.name
      )
    })

    return products
  }

  public getTags = async (productID: number): Promise<any[]> => {
    if (productID == 8371) {
      return [
        { id: 8371, tags: 'balada' },
        { id: 8371, tags: 'neutro' },
        { id: 8371, tags: 'delicado' },
        { id: 8371, tags: 'festa' }
      ]
    }
    return []
  }

  public getProductById = async (productID: number): Promise<Product[]> => {
    const products: any = [
      {
        id: 8371,
        name: "VESTIDO TRICOT CHEVRON",
        tags: ["balada", "neutro", "delicado", "festa"]
      },
      {
        id: 8372,
        name: "VESTIDO TRICOT TESTE",
        tags: ["balada", "neutro", "delicado", "festa"]
      }
    ]

    var product = products.filter(function (produto: any) {
      return produto.id === productID
    });

    return product
  }

  public getProductByName = async (name: string): Promise<Product[]> => {
    const products: any = [
      {
        id: 8371,
        name: "VESTIDO TRICOT CHEVRON",
        tags: ["balada", "neutro", "delicado", "festa"]
      },
      {
        id: 8372,
        name: "VESTIDO TRICOT TESTE",
        tags: ["balada", "neutro", "delicado", "festa"]
      }
    ]

    var product = products.filter(function (produto: any) {
      return produto.name === name
    }).map((product: any) => {
      return new Product(
        product.id,
        product.name
      )
    })

    return product
  }

  public getProductByTag = async (tag: string): Promise<any> => {
    const products: any = [
      {
        id: 8371,
        name: "VESTIDO TRICOT CHEVRON",
        tags: ["balada", "neutro", "delicado", "festa"]
      },
      {
        id: 8372,
        name: "VESTIDO TRICOT TESTE",
        tags: ["balada", "neutro", "delicado", "festa"]
      }
    ]

    var product = products.filter(function (produto: any) {
      return produto.tag === tag
    }).map((product: any) => {
      return new Product(
        product.id,
        product.name
      )
    })

    return product
  }

}