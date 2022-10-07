import { Router } from 'express'
import { ProductBusiness } from '../business/ProductBusiness'
import { ProductController } from '../controller/ProductController'
import { Migrations } from '../database/migrations/Migrations'
import { ProductDatabase } from '../database/ProductDatabase'


export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new Migrations()
    )
)

productRouter.post("/execute", productController.populate)

//Gets
productRouter.get("/all", productController.getProduct)
productRouter.get("/search", productController.getProductByName)
productRouter.get("/forTags", productController.getProductByTag)
productRouter.get("/:id", productController.getProductById)
