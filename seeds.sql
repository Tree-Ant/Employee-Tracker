USE empTrack_db;

-- =================DEPARTMENT=================================
INSERT INTO department (name) VALUES ('Advertising');
INSERT INTO department (name) VALUES ('Education');
INSERT INTO department (name) VALUES ('Veterinary');
INSERT INTO department (name) VALUES ('Science');

-- =================role=================================

INSERT INTO role (title, salary, department_id) VALUES ("Jingle Writer", 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Student", 50000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Veterinary", 50000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Scientist", 50000, 4);

-- =================EMPLOYEE=================================

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jerry', "Smith", 1, 6969);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Morty', "Smith", 2, 6969);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Beth', "Smith", 3, 6969);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Rick', "Sanchez", 4, 6969);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Summer', "Smith", 2, 6969);


SELECT * from department;
SELECT * from role;
SELECT * from employee;