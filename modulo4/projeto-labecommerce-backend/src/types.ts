export type userType = {
    name: string,
    email: string,
    password: string
}

//dados para inserir 
export type userInfo = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type productType = {
    name: string,
    price: number,
    image_url: string
}

//dados para inserir 
export type productInfo = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type purchaseInfo = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}

export type allPurchase = {
    IdCompra: string,
    NomeProduto: string,
    Preco: number,
    Quantidade: number,
    PrecoTotal: number
}

export type PurchasesByUser ={
    NomePessoa: string
    compras: allPurchase[]
}