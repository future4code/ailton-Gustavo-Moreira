import * as path from "path";
import fs from "fs";

export class FileSystemMock {
  //******************************************************/
  //*****   MÉTODO DE IMPORTAÇÃO DE ARQUIVO EXTERNO   *****
  //******************************************************/

  readFileJson(file: any) {
    try {
      let content = fs.readFileSync(file, "utf-8");
      return JSON.parse(content);
    } catch (error: any) {
      console.log("Erro ao carregar o arquivo.");
    }
  }

  //******************************************************/
  //*****   MÉTODO DE IMPORTAÇÃO DE ARQUIVO EXTERNO   *****
  //******************************************************/

  readFile(file: any) {
    try {
      const dirContents = fs.readdirSync(__dirname);
      console.log(dirContents);

      const fileContents = fs.readFileSync(path.join(__dirname, file), {
        encoding: "utf-8",
      });

      console.log(fileContents);
    } catch (error: any) {
      console.log("Erro ao carregar o arquivo.");
    }
  }
}