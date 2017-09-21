### Schema
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE yum
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured  BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
