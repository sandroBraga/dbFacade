create table perfis (
	id int not null, 
	perfil varchar (20) not null, 
	primary key (id)
);
/
insert into perfis (id, perfil) 
	values (1, 'cliente'), 
	(2, 'veterinario'), 
	(3, 'atendente'), 
	(4, 'administrador');
/
create table pessoa (id int not null, 
	id_perfil int not null, 
	id_endereco int not null,
	nome varchar(100) not null, 
	cpf varchar(100) not null,
	identidade varchar(100) not null, 
	email varchar(50) not null,
	senha varchar(50) not null, 
	primary key (id),
	foreign key (id_perfil) references perfis (id), 
	foreign key (id_endereco) references endereco (id)	
);
/
insert into pessoa (id, id_perfil, id_endereco, nome, cpf, identidade, email, senha)
	values (1, 1, 1, 'sandro', '8844', 'mg20', 'sandro@mail.com', '12345'), 
	(2, 2, 1, 'oliveira', '2554', 'sp40', 'oliveira@mail.com', '12345'), 
	(3, 3, 1, 'braga', '5511', 'pr20', 'braga@mail.com', '12345'),
	(4, 4, 1, 'borges', '2254', 'ba54', 'borges@mail.com', '12345');

/
create table veterinario(
	id int not null, crv varchar(50) not null, 
	id_tipo_animal int not null,
	foreign key (id) references pessoa (id),
	foreign key (id_tipo_animal) references tipo_animal(id)
);
/
create table administrador(id int not null, 
	foreign key (id) references pessoa (id)
);
/
create table atendente(id int not null, 
	foreign key (id) references pessoa (id)
);
/
create table tipo_animal(id int not null, 
	tipo varchar(30) not null, 
	primary key (id)
);
/
create table endereco (id int not null, 
	rua varchar(100) not null, 
	numero int not null,
	cep varchar(100) not null, 
	bairro varchar(100) not null,
	uf varchar(2) not null, 
	cidade varchar(100) not null,
	primary key (id)
);
/
insert into endereco (id, rua, numero, cep, bairro, uf, cidade)
	values(1, 'coromandel', 10, '38785000', 'centro', 'mg', 'uberlandia');
/
create table servico(id int not null, 
	tempo date not null, valor_pataz decimal(10,2),
	cashback_pataz decimal(10,2), 
	valor_real decimal(10,2) not null,
	descricao varchar(50) not null,
	primary key (id)
);
/
create table estoque(id int not null,
	quantidade int not null,
	primary key (id)
);
/
create table produto(id int not null,
	qtde_estoque int not null,
	nome varchar(100) not null,
	fabricante varchar(100) not null,
	especificacoes varchar(100) not null,
	valor_real double not null,
	valor_pataz double not null,
	primary key (id)
);


