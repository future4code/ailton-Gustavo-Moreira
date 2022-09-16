import app from "./app"
import RecipeEndpoint from "./endpoints/Recipe"
import UserEndpoint from "./endpoints/User"

const user = new UserEndpoint()
const recipe = new RecipeEndpoint()

//Criar Usuario
app.post('/signup', user.creatUser)
//Login
app.post("/login", user.login)
//Pegar próprio perfil
app.get("/user/profile", user.profile)
//Pegar perfil de outro usuário
app.get("/user/:id", user.UserProfile)
//Seguindo Usuario
app.post("/user/fallowUp", user.fallowUser)
//Pegando pessoas que seguiu
app.get("/following", user.followById)
//Pegando receitas no Feed
app.get("/user-feed", user.recipeByFeed)

//Criar Receita
app.post('/recipe', recipe.creatRecipe)
//Pegar Receita por ID
app.get("/recipe/:id", recipe.recipeById)