//NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Il0vecasey!",
    database: "employee_infoDB"
});

connection.connect(function (err) {
    if (err) throw err;
    startMenu();
    console.log("You are connected");
});

function startMenu() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all Employees",
                "View Employees by Department",
                "View Employees by Role",
                "Add Department",
                "Add Employee",
                "Add Role",
                "Update Employee Role",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View all Employees":
                    empAllSearch();
                    break;

                case "View Employees by Department":
                    depSearch();
                    break;

                case "View Employees by Role":
                    roleSearch();
                    break;

                case "Add Department":
                    depAdd();
                    break;

                case "Add Employee":
                    empAdd();
                    break;
                
                case "Add Role":
                    roleAdd();
                    break;
                
                case "Update Employee Role":
                    roleUpdate();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}
function empAllSearch() {

    const query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        startMenu()
    })
}

function depSearch(){
    const query = "SELECT * FROM department"
    connection.query(query, function (err, res){
        if (err) throw err;
        console.table(res)
        startMenu()
    })
}

function roleSearch(){
    const query = "SELECT * FROM empRole"
    connection.query(query, function (err, res){
        if (err) throw err;
        console.table(res)
        startMenu()
    })
}

function depAdd(){
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "Please enter the name of the department you would like to add",
    })
    .then(function(answer){
        var query = "INSERT INTO department SET ?";
        connection.query(query, {name:answer["department"]}, function (err,res){
            if (err) throw err;
            console.log("The department has been added");
            startMenu();
        })
    })
}

//employee (first_name, last_name, role_id, manager_id)
function empAdd(){
    var query = "SELECT * FROM employee";
    var query = "SELECT * FROM department";
   var department = [];
   connection.query(query, function (err, res){
       if (err) throw err;
       for(var i = 0; i < res.length; i++){
           department.push({name:res[i].first_name, name:res[i].last_name, value: res[i].id, name:res[i].name});
       }
       var query = "SELECT * FROM empRole";
       var employee_role = [];
       connection.query(query, function (err,res) {
           if (err) throw err;
           for (var i = 0; i < res.length; i++) {
               employee_role.push({name:res[i].employeerole, value:res[i].id})
           }
    inquirer.prompt([
        {
        type: "input",
        name: "first name",
        message: "Please enter the employee's first name"
        },
        {
        type: "input",
        name: "last name",
        message: "Please enter the employee's last name"
        },
        {
        type: "input",
        name: "role",
        message: "Please select the employee's role",
        choices: employee_role
        },
        {
        type: "input",
        name: "department",
        message: "Please select the employee's department",
    choices: department    
    }

    ]).then(function(one){
        var query = "INSERT INTO employee SET ?";
        connection.query(query, {first_name: one["first name"], last_name: one["last name"], role_id: one["role"], manager_id: one["department"]}, function(err, res) {
            if (err) throw err;
            console.log("employee added");
            startMenu();
})
    })
})
   });
}