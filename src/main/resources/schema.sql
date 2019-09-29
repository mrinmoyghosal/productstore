drop table if exists products;

create table products(
    id int not null AUTO_INCREMENT,
    name varchar(100) not null,
    price int not null,
    primary key (id)
);
