CREATE TABLE product(
    id int IDENTITY,
    name varchar(200),
    description varchar(400),
    price decimal(18,0),
    createdAt DATETIME NOT NULL
                DEFAULT CURRENT_TIMESTAMP 
);