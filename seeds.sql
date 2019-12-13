USE empTrack_db;

INSERT INTO department (name) VALUES ('Advertising');


INSERT INTO job (title, salary, department_id) VALUES ("Jingle Writer", 50000, 69);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jerry', "Smith", 420, 6969);


SELECT * from department;
SELECT * from job;
SELECT * from employee;