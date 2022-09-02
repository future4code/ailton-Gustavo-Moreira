import {app} from "./app"
import createProduct from "./endpoints/createProduct"
import createPurchase from "./endpoints/createPurchase"
import createUser from "./endpoints/createUser"
import getProducts from "./endpoints/getProducts"
import getPurchaseByUser from "./endpoints/getPurchaseByUser"
import getUsers from "./endpoints/getUsers"

//Criar usuario
app.post("/users", createUser)

//Pegar usuario
app.get("/users", getUsers)

//Criar produto
app.post("/products", createProduct)

//Pegar produtos
app.get("/products", getProducts)

//Criar compra
app.post("/purchases", createPurchase)

//Pegar comprar por usuario
app.get("/users/:user_id/purchases", getPurchaseByUser)