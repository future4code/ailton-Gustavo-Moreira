CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SET SQL_SAFE_UPDATES = 0;

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

INSERT INTO Filmes (id, nome, sinopse, lancamento)
	VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02");

INSERT INTO Filmes (id, nome, sinopse, lancamento, avaliacao)
	VALUES ("004", "Tropa de Elite", "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.", "2007-08-17", 10);
    
SELECT id, nome, avaliacao FROM Filmes WHERE id = "004";
SELECT * FROM Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;
SELECT * FROM Filmes WHERE nome LIKE "%Elite%";
SELECT * FROM Filmes WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";
SELECT * FROM Filmes WHERE lancamento < "2022-08-22";
SELECT * FROM Filmes WHERE lancamento < "2022-08-22" AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%") AND avaliacao >= 7;



ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
UPDATE Actor SET name = " Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003";
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
WHERE id = "005";
UPDATE Actor SET idade = 20 WHERE id = "005";
DELETE FROM Actor WHERE name ="Fernanda Montenegro";
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
SELECT MAX(salary) FROM Actor;
SELECT MIN(salary) FROM Actor WHERE gender = "female";
SELECT COUNT(*) as total_de_atrizes FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor;
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
SELECT id, name FROM Actor ORDER BY name DESC;
SELECT * FROM Actor ORDER BY salary ASC;
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
ALTER TABLE Filmes ADD playing_limit_date DATE;
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
UPDATE Filmes SET playing_limit_date = "2020-01-20" WHERE id = "001";
UPDATE Filmes SET playing_limit_date = "2022-09-01" WHERE id = "004";
DELETE FROM Filmes WHERE id = "003";
UPDATE Filmes SET sinopse = "testando" WHERE id = "003";
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;
SELECT AVG(avaliacao) FROM Filmes;
SELECT COUNT(*) as tempo_limite FROM Filmes WHERE playing_limit_date > CURDATE();
SELECT COUNT(*) FROM Filmes WHERE lancamento > CURDATE();
SELECT MAX(avaliacao) FROM Filmes;
SELECT MIN(avaliacao) FROM Filmes;
SELECT * FROM Filmes ORDER BY nome;
SELECT * FROM Filmes ORDER BY nome DESC LIMIT 5;
SELECT * FROM Filmes ORDER BY lancamento DESC LIMIT 3;
UPDATE Filmes SET avaliacao = 9.5 WHERE id = "002";
SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 3;

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

select * from Rating;
insert into Rating (id, comment, rate, movie_id) value ("007", "Nunca nem vi", 5, "003");
alter table Filmes drop column avaliacao;

CREATE TABLE MovieCast (
		filmes_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

select * from MovieCast;
insert into MovieCast (filmes_id, actor_id) value ("004", "007"); 
SELECT * FROM Filmes INNER JOIN Rating ON Filmes.id = Rating.movie_id;
select nome, Filmes.id, rate from Filmes inner join Rating on Filmes.id = Rating.movie_id;

select nome, Filmes.id, rate, comment from Filmes left join Rating on Filmes.id = Rating.movie_id;
select nome, id, actor_id from Filmes right join MovieCast on id = filmes_id;

select AVG(rate), nome from Filmes left join Rating on Filmes.id = movie_id group by Filmes.id;

SELECT * FROM Filmes 
LEFT JOIN MovieCast ON Filmes.id = filmes_id 
JOIN Actor ON Actor.id = actor_id;

SELECT Filmes.id as "Id do Filme", Filmes.nome as "Nome do Filme", Actor.id as Id_Ator, Actor.name as Nome_Ator FROM Filmes 
LEFT JOIN MovieCast ON Filmes.id = filmes_id 
JOIN Actor ON Actor.id = actor_id;

SELECT Filmes.nome as "Nome do Filme", Actor.name as "Nome do Ator", rate, comment FROM Filmes 
left Join Rating on Filmes.id = movie_id
left JOIN MovieCast ON Filmes.id = filmes_id
JOIN Actor ON Actor.id = actor_id;






