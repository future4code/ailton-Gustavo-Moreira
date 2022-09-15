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
    data_criacao VARCHAR(255) NOT NULL
);

create table Receita_Usuario_Cookenu (
	id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    receita_id VARCHAR(255) NOT NULL,
    foreign key(user_id) references User_Cookenu(id),
    foreign key(receita_id) references Receita_Cookenu(id)
);

select * from User_Cookenu;
select * from Receita_Cookenu;
select * from Receita_Usuario_Cookenu