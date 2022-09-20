import app from "./controller/app";
import { UserController } from "./controller/UserController";
import UserEndpoint from "./endpoints/User";

// const user = new UserEndpoint()
const userController = new UserController()

//criar usuario
// app.post('/signup', user.createUser)

//criar usuario pelo Business
app.post('/signup', userController.create)
