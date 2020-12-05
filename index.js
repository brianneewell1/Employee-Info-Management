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
    runSelect();
    console.log("You are connected");
});

function runSelect() {
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
    })
}