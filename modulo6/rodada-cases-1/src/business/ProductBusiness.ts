import { Migrations } from "../database/migrations/Migrations"
import { ProductDatabase } from "../database/ProductDatabase"
import { IInputIdDB, IInputNameDB, IInputTagDB, Product } from "../models/Product"

export class ProductBusiness {
    static getPosts(input: IInputIdDB) {
        throw new Error("Method not implemented.")
    }
    constructor(
        private productDatabase: ProductDatabase,
        private migrations: Migrations
    ) {}
    
    public getProduct = async () => {
        
        const productDB = await this.productDatabase.getProduct()

        //função para nao repetir o nome do produto
        let productsOnly: Product[] = []
        productDB.forEach((product: Product) => {
            const duplicate = productsOnly.findIndex((item: Product)=>{
                return product.getId() === item.getId()
            }) > -1
            if(!duplicate){
                productsOnly.push(product)
            }
        });
        //colocando as tags nos produtos
        for (let product of productsOnly){
                const productId: any = product.getId()
                const tagsDB = await this.productDatabase.getTags(productId)
                const mapTags = tagsDB.map((tags) =>{
                    return tags.tags
                })                
                product.setTags(mapTags)
            }            
        const response = {message:"Todos os Produtos Cadastrados", Products:productsOnly}
        return response
    }

    public getProductById = async (input: IInputIdDB) => {       
        const {id} = input
        const productDB = await this.productDatabase.getProductById(id)
        const product = new Product(
            id,
            productDB as unknown as string
        ) 
         //colocando as tags nos produtos         
        for (let tags of productDB){
                const tagsDB = await this.productDatabase.getTags(id)
                const mapTags = tagsDB.map((tags) =>{
                    return tags.tags
                })        
                product.setTags(mapTags)
            }
            const response = {message:"Produtos Filtrado pelo Id", Products:product}
        return response
    }

    public getProductByName = async (input: IInputNameDB) => {
        
        const {name} = input
        const nome = name.toUpperCase()
        const productDB = await this.productDatabase.getProductByName(nome)
        
        //função para nao repetir o nome do produto
        let productsOnly: Product[] = []        
        productDB.forEach((product: Product) => {
            const duplicate = productsOnly.findIndex((item: Product)=>{
                return product.getId() === item.getId()
            }) > -1
            if(!duplicate){
                productsOnly.push(product)
            }
        });
        //colocando as tags nos produtos
        for (let product of productsOnly){
                const productId: any = product.getId()        
                const tagsDB = await this.productDatabase.getTags(productId)
                const mapTags = tagsDB.map((tags) =>{
                    return tags.tags
                })                
                product.setTags(mapTags)
            }
        const response = {message:"Produtos Filtrado por Nome", Product:productsOnly}

        return response
    }

    public getProductByTag = async(input:IInputTagDB) =>{
        const {tags} = input
        const productDB = await this.productDatabase.getProductByTag(tags)
         //colocando as tags nos produtos
        for (let product of productDB){
            const productId: any = product.getId()
            const tagsDB = await this.productDatabase.getTags(productId)
            const mapTags = tagsDB.map((tags) =>{
                return tags.tags
            })                
            product.setTags(mapTags)
        }
        const response = {message:"Produtos Filtrado por Tag", Products:productDB}
        return response
    }

    //Ativar o Migrations automaticamente no postman
    public populate = async () =>{
        const migrations = new Migrations()
        migrations.execute()
    }

}