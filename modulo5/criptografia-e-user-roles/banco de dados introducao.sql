create table User_Autentificacao (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

drop table User_Autentificacao;
select * from User_Autentificacao