# Gustavo Mariotin
## Banco de Dados e Introdução a SQL 
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW TABLES ;
SHOW DATABASES;
DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender) 
	VALUES ("002", "Taís Araujo", 200000, "1963-08-23", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
    
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES("004", "Paulo José", 400000, "1949-04-18", "male");
    
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES( "006", "Reynaldo Gianecchini", 500000, "1972-11-12", "male");
    
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES( "007", "Paolla Oliveira", 500000, "1982-04-14", "female");
    
SELECT * FROM Actor;
SELECT id, salary FROM Actor;
SELECT id, name FROM Actor WHERE gender = "male";
SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "invalid";
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
SELECT id, name from Actor WHERE id = "002";
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
SELECT * FROM Actor WHERE name LIKE "%g%" OR "%G%";
SELECT * FROM Actor WHERE (name LIKE "%g%" OR "%G%" OR "%a%" OR "%A%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255),
sinopse TEXT,
lancamento DATE,
avaliacao INT
);

SELECT * FROM Filmes;

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
	VALUES ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
	VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
	VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
	VALUES ("004", "Tropa de Elite", "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.", "2007-08-17", 10);
    
SELECT id, nome, avaliacao FROM Filmes WHERE id = "004";
SELECT * FROM Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;
SELECT * FROM Filmes WHERE nome LIKE "%Elite%";
SELECT * FROM Filmes WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";
SELECT * FROM Filmes WHERE lancamento < "2022-08-22";
SELECT * FROM Filmes WHERE lancamento < "2022-08-22" AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%") AND avaliacao >= 7;

-- 1 A)
-- A VARCHAR é para declarar string 
-- PRIMARY KEY é para dizer que o item é único
-- NOT NULL é para informar que o valor nao pode ser nulo
-- B) SHOW TABLES mostrou toda a tabela Actor - SHOW DATABASES mostrou minha conta
-- C) DESCRIBE descreve o que tem dentro da tabela e como ela foi criada.
-- 2 B) Erro 1062 - Entrada duplicada por um item primario
-- C) Erro 1136 - Está faltando colocar o aniversario e o genero
-- D) Erro 1364 - O campo nome nao tem um valor definido. Como ele é NOT NULL precisa de um valor. 
-- E) Erro 1292 - Valor incorreto no campo da data. Tem que estar entre aspas. 
-- 3 C) retornou 0 resultados.
-- E) Erro 1054 - A coluna "nome" é desconhecida.
-- 4 A) É uma querry que busca um nome que começa com A ou J e que tenha um salario acima do valor estipulado
-- 5 A) o tipo TEXT não tem um limite de tamanho
