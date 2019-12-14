DROP DATABASE IF EXISTS empTrack_db;

-- Create the database wishes_db and specified it for use.
CREATE DATABASE empTrack_db;

USE empTrack_db;

-- Create the table wishes.
CREATE TABLE department (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(30) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `role_id` INT NOT NULL,
  `manager_id` INT NOT NULL,
  PRIMARY KEY (id)
);


