create table User_Cookenu (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL default ("NORMAL")
);

create table Receita_Cookenu (
	id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) UNIQUE NOT NULL,
    data_criacao date NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    foreign key(user_id) references User_Cookenu(id)
);


CREATE TABLE Seguindo_Projeto_Cookenu (
id VARCHAR(255) NOT NULL PRIMARY KEY,
user_id VARCHAR(255) PRIMARY KEY,	
following_id VARCHAR(255) PRIMARY KEY,
	FOREIGN KEY (user_id) REFERENCES User_Cookenu(id),
	FOREIGN KEY (following_id) REFERENCES User_Cookenu(id)
);

select * from User_Cookenu;
select * from Receita_Cookenu;
select * from Seguindo_Projeto_Cookenu;
select * from Seguindo_Projeto_Cookenu where user_id = "e25b4717-bc1d-4b5b-b03d-821768da3861";

select User_Cookenu.name
from Seguindo_Projeto_Cookenu
inner join User_Cookenu
on
Seguindo_Projeto_Cookenu.following_id = User_Cookenu.id
where user_id = "e25b4717-bc1d-4b5b-b03d-821768da3861";

select Receita_Cookenu.titulo, Receita_Cookenu.descricao, Receita_Cookenu.data_criacao, User_Cookenu.name
from Seguindo_Projeto_Cookenu
inner join User_Cookenu
on Seguindo_Projeto_Cookenu.following_id = User_Cookenu.id
inner join Receita_Cookenu
on Seguindo_Projeto_Cookenu.following_id = Receita_Cookenu.user_id
where Seguindo_Projeto_Cookenu.user_id = "e25b4717-bc1d-4b5b-b03d-821768da3861";




drop table Seguindo_Projeto_Cookenu