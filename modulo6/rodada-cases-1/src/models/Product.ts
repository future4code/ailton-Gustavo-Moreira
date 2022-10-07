export interface IFullProductDB {
    product: Product[] 
}

export interface IInputIdDB {
   id: number
}

export interface IInputNameDB {
    name: string
}

export interface IInputTagDB {
    tags: string
}

export interface IProductDB {
    id: string,
    name: string,
}


export interface ITagsDB{
    tags: string []
}

export interface IInputProductDTO{
    id: number,
    name: string,
    tags: string []
}

export interface ICreateProductDTO{
    id: number,
    name: string,
    tags: string []
}

export class Product {
    constructor(
        private id: number,
        private name: string,
        private tags?: string [],
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
