export type afazer = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export const listaAFazeres: afazer[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "Varrer",
        "completed": true
    },

    {
        "userId": 1,
        "id": 2,
        "title": "Passar Pano",
        "completed": true
    },

    {
        "userId": 1,
        "id": 3,
        "title": "Lavar a Louça",
        "completed": false
    },

    {
        "userId": 2,
        "id": 4,
        "title": "Lavar o Carro",
        "completed": false
    },

    {
        "userId": 2,
        "id": 5,
        "title": "Lavar o Banheiro",
        "completed": false
    },

    {
        "userId": 2,
        "id": 6,
        "title": "Arrumar a Cama",
        "completed": true
    },

]


export const listaNova = [
    {
        "userId": 1,
        "tarefas": [
            { "id": 1, "title": "Varrer", "completed": true },
            { "id": 2, "title": "Passar Pano", "completed": true },
            { "id": 3, "title": "Lavar a Louça", "completed": false }
        ]
    },

    {
        "userId": 2,
        "tarefas": [
            { "id": 4, "title": "Lavar o Carro", "completed": false },
            { "id": 5, "title": "Lavar o Banheiro", "completed": false },
            { "id": 6, "title": "Arrumar a Cama", "completed": true }
        ]
    },

    {
        "userId": 3,
        "tarefas": [
            { "id": 7, "title": "Passar Roupa", "completed": true },
            { "id": 8, "title": "Limpar Vidro", "completed": false },
            { "id": 9, "title": "Compras", "completed": true }
        ]
    }

]
