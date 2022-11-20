const fs = require("fs");
const jest = require("jest");
const inquirer = require("inquirer");

const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

function managerInfo () {
    inquirer .prompt([
        {
            type: "input",
            message: "Please enter team manager's name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter team manager's employee ID",
            name: "ID"
        },
        {
            type: "input",
            message: "Please enter team manager's email",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter team manager's office number",
            name: "number"
        }
        {
            type: "list",
            message: "Would you like to add another team member or finish building?",
            name: "teamAdd",
            choices: [ "engineer", "intern", "finish build" ]
            
        }
    ]);
}
managerInfo();