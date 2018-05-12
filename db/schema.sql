
create table burgers (
id INT auto_increment not null,
burger_name varchar(255),
createdAt timestamp not null,
devoured Boolean default false,
primary key(id)

);