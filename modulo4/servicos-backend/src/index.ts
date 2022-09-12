import  {app}  from "./app";
import { criarEndereco } from "./endpoints/criarEndereco";

app.post("/cadastrarCep/:cep", criarEndereco)

