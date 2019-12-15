USE empTrack_db;


SELECT * from department;
SELECT * from role;
SELECT * from employee;

-- =================JOIN=================================

UPDATE EMPLOYEE SET role_id= '1' WHERE first_name= 'Morty';

SELECT first_name, last_name, title FROM employee LEFT JOIN role ON employee.role_id = role.id;
SELECT first_name, last_name, title, salary, name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;