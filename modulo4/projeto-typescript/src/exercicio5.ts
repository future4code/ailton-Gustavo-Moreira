
type usuarios = {
    name: string,
    email: string,
    role: string
}

const pessoas : usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

const filtroRoleMapEmail = pessoas.filter((pessoa) =>{
    return pessoa.role === "admin"
}).map((pessoa) =>{
    return pessoa.email
})

console.log(filtroRoleMapEmail)