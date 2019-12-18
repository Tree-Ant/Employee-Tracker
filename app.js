const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql');



var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port:  3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "empTrack_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


const queryStringemp = "SELECT first_name, last_name, title, salary, name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id";


// =================START=======================
const start = () => {

    inquirer
        .prompt([
            {
                type: "list",
                name: "todo",
                message: "What would you like to do?",
                choices: ["View", "Add", "Update Employee Role", "END"],
            },
        ])
        .then(answers => {
            console.log(answers.todo);
            switch (answers.todo) {
                case 'View':
                    return view();
                    break;
                case "Add":
                    return add();
                    break;
                case "Update Employee Role":
                    return update();
                    break;
                case "END":
                    return END();
                    break;
            }
        });
}

// =================VIEW==========================
const view = () => {

    inquirer
        .prompt([
            {
                type: "list",
                name: "view",
                message: "What would you like to View?",
                choices: ["Employees", "Department", "Roles"],
            },
        ])
        .then(answers => {
            console.log(answers.view);

            switch (answers.view) {
                case 'Employees':
                    return viewEmployees();
                    break;
                case "Department":
                    return viewDepartments();
                    break;
                case "Roles":
                    return viewRoles();
                    break;
            }
        });
}
const viewEmployees = () => {
    console.log("Employees Viewed");
    connection.query(queryStringemp, (err, res) => {
        if (err) throw err;
        let viewer = [];
        res.forEach((employee) =>
            viewer.push(
                {
                    "First Name": employee.first_name,
                    "Last Name": employee.last_name,
                    "Title": employee.title,
                    "Salary": employee.salary,
                    "Department": employee.name
                })
        );
        console.table(viewer);
        return start();
    })
};

const viewDepartments = () => {
    console.log("Departments Viewed");
    var queryString = "SELECT * from department";
    connection.query(queryString, (err, res) => {
        if (err) throw err;
        let viewer = [];
        res.forEach((department) =>
            viewer.push({ "id": department.id, "Department": department.name })
        );
        console.table(viewer);
        return start();

    })
};

const viewRoles = () => {
    console.log("Roles Viewed");
    var queryString = "SELECT * from role";
    connection.query(queryString, (err, res) => {
        if (err) throw err;
        let viewer = [];
        res.forEach((role) =>
            viewer.push({ "ID": role.id, "Roles": role.title })
        );
        console.table(viewer);
        return start();
    })
};


// =================ADD============================
const add = () => {
    console.log("ADD START")

    inquirer
        .prompt([
            {
                type: "list",
                name: "addWhat",
                message: "What would you like to do?",
                choices: ["Employee", "Department", "Role"],
            },
        ])
        .then(answers => {
            console.log(answers.addWhat);
            switch (answers.addWhat) {
                case 'Employee':
                    return addEmployee();
                    break;
                case "Department":
                    return addDepartment();
                    break;
                case "Role":
                    return addRole();
                    break;
            }
        });
}

const addEmployee = () => {

    inquirer
        .prompt([
            {
                type: "input",
                name: "addFirst",
                message: "New employee's First Name?",
            },
            {
                type: "input",
                name: "addLast",
                message: "New employee's Last Name?",
            },
            {
                type: "input",
                name: "addRoleID",
                message: "New employee's Role ID?",
            },
            {
                type: "input",
                name: "addManagerID",
                message: "New employee's Manager ID?",
            },
        ])
        .then(answers => {
            console.log(answers);
            var queryString = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.addFirst}", "${answers.addLast}", ${answers.addRoleID}, ${answers.addManagerID})`
            console.log(queryString);
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                return start();
            })
        });

}

const addDepartment = () => {
    console.log("ADD DEPARTMENT START");
    inquirer
        .prompt([
            {
                type: "input",
                name: "addDepartment",
                message: "New Department name?",
            }
        ])
        .then(answers => {
            console.log(answers);
            var queryString = `INSERT INTO department (name) VALUES ("${answers.addDepartment}")`
            console.log(queryString);
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                return start();
            })
        });
}

const addRole = () => {
    console.log("ADD ROLE START");
    inquirer
        .prompt([
            {
                type: "input",
                name: "addTitle",
                message: "New Role name?",
            },
            {
                type: "number",
                name: "addSalary",
                message: "New Role salary?",
            },
            {
                type: "number",
                name: "addDepID",
                message: "New Role Department ID?",
            }
        ])
        .then(answers => {
            console.log(answers);
            var queryString = `INSERT INTO role (title, salary, department_id) VALUES ("${answers.addTitle}", "${answers.addSalary}", "${answers.addDepID}")`
            console.log(queryString);
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                return start();
            })
        });
}

// =================UPDATE==========================
const update = () => {
    console.log("UPDATE EMPLOYEE ROLE START")     

        const emp = "SELECT * FROM employee";    
        connection.query(emp, (err, res) => {             
            if (err) throw err;
            const empChoice = [];
            const roleChoice = []; 
            res.forEach((employee) =>
                empChoice.push(employee.first_name)            
            );
            res.forEach((employee) =>
                roleChoice.push(employee.role_id)            
            );

    console.log(empChoice);

    inquirer
        .prompt([
            {
                type: "list",
                name: "employeePICK",
                message: "Which employee would you like to update?",
                choices: empChoice
            },
            {
                type: "number",
                name: "roleNewPICK",
                message: "What role would you like to change it to?",
                // choices: roleChoice
            },
        ])
        .then(answers => {
            console.log(answers.employeePICK);
            console.log(answers.roleNewPICK);

            const roleCHANGE = `UPDATE EMPLOYEE SET role_id= '${answers.roleNewPICK}' WHERE first_name= '${answers.employeePICK}'`;
            console.log(roleCHANGE);
            connection.query(roleCHANGE, (err, res) => {
                if (err) throw err;
                return start();
            })
        });
        });
    
    
};

// =================STUFF==========================
const END = () => {
    console.log("goodbye");
}
start();