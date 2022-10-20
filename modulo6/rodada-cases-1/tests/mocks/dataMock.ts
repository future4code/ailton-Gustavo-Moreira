import * as path from "path";
import { FileSystemMock } from "./FileSystemMock";

//Chamando o serviço para leitura do arquivo JSON
const lendoJSON = new FileSystemMock().readFileJson(path.resolve(__dirname, "../../../src/products.json"));

export const productJson = lendoJSON.products.map((product: any) =>{
    return {id:product.id, name:product.name}
})

const tagsJson = lendoJSON.products.flatMap((product: any) =>{
    return product.tags
})
const tagsJsonSemRepetir = [... new Set(tagsJson)]

// //transforma em objeto
export let tags: any = [];
for (let i = 0; i < tagsJsonSemRepetir.length; i++) {
  tags.push({tags: tagsJsonSemRepetir[i] });
}

export const IdAndTags = lendoJSON.products.flatMap((product: any) =>{
    return {id:product.id, tags: product.tags}
})

const filtro = lendoJSON.products.flatMap((product: any) =>{
    return {id:product.id, tags: product.tags}
})

let contador: number = 0;
export const products_tags: any = []

while (contador < IdAndTags.length) {
  for (let i = 0; i < IdAndTags[contador].tags.length; i++) {
    if (IdAndTags[contador].tags[i] === tags[i]) {
    } 
    products_tags.push({
      id: IdAndTags[contador].id,
      tags: IdAndTags[contador].tags[i],
    });
  }

  contador++;
}
