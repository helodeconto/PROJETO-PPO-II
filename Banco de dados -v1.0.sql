create database historia;

use historia;

create table caracteristicas(
id_Caracteristicas int not null auto_increment,
raca varchar(30),
genero varchar(30),
idade int,
altura varchar(45),
pele varchar(45),
cabelo varchar(45),
olho varchar(45),
primary key(idCaracteristicas)
);

create table personalidade(
id_Personalidade int not null auto_increment,
gosta varchar(45),
naogosta varchar(45),
acoes varchar(45),
medo varchar(45),
primary key(idPersonalidade)
);

create table personagem(
id_Personagem int not null auto_increment,
nome varchar(30),
funcao varchar(30),
caracteristicas_id int,
personalidade_id int,
primary key(idPersonagem),
foreign key(caracteristicas_id) references caracteristicas(idCaracteristicas) on update cascade on delete set null,
foreign key(personalidade_id) references personalidade(idPersonalidade) on update cascade on delete set null
);

create table emocao(
id_Emocao int not null auto_increment,
nome varchar(15) not null,
primary key(id_Emocoes)
);

create table personagem_emocao(
id_Personagem_emocao int not null auto_increment,
personagem_id int not null,
emocao_id int not null,
primary key(id_Personagem_emocao),
foreign key(personagem_id) references personagem(id_Personagem) on update cascade on delete cascade,
foreign key(emocao_id) references emocao(id_Emocao) on update cascade on delete cascade
);

create table cenario(
id_Cenario int not null auto_increment,
nome varchar(25),
primary key(id_Cenario)
);

create table cena(
id_Cena int not null auto_increment,
primary key(id_Cena)
);

create table cenario_cena(
id_cenario_cena int not null auto_increment,
cenario_id int not null,
cena_id int not null,
primary key(id_cenario_cena),
foreign key(cenario_id) references cenario(id_Cenario) on update cascade on delete cascade,
foreign key(cena_id) references cena(id_Cena) on update cascade on delete cascade
);

create table personagem_cena(
id_personagem_cena int not null auto_increment,
personagem_id int not null,
cena_id int not null,
primary key(id_personagem_cena),
foreign key(personagem_id) references personagem(id_Personagem) on update cascade on delete cascade,
foreign key(cena_id) references cena(id_Cena) on update cascade on delete cascade
);