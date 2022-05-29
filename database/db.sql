CREATE DATABASE telemetry

USE telemetry;

CREATE TABLE users(
    id INIT (20) NOT NULL,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(60) NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    mail_address VARCHAR(100) NOT NULL,
    phone number NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INIT(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE users;