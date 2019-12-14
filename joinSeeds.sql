USE empTrack_db;


SELECT * from department;
SELECT * from role;
SELECT * from employee;

-- =================JOIN=================================

SELECT first_name, last_name, title, salary, name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;


