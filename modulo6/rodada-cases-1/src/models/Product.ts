export interface IFullProductDB {
    produto_id: string,
    nome: string,
    tags: string []
}

export interface IProductDB {
    id: string,
    name: string,
}

export interface ITagsDB{
    tags: string []
}

export interface IInputProductDTO{
    id: string,
    name: string,
    tags: string []
}

export interface ICreateProductDTO{
    id: string,
    name: string,
    tags: string []
}


export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string [],
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setTags = (newTag: string[]) => {
        this.tags = newTag
    }

}
