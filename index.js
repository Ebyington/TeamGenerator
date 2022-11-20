const fs = require("fs");
const jest = require("jest");
const inquirer = require("inquirer");

const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const buildTeam =require("./src/writeHTML");

const teamInfo = [];

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
        },
        {
            type: "list",
            message: "Would you like to add another team member or finish building?",
            name: "teamAdd",
            choices: [ "engineer", "intern", "finish build" ]
        },
    ])
    .then((ans) => {
        teamInfo.push(
          new manager(
            ans.name,
            ans.id,
            ans.email,
            ans.number
          )
        )
    console.log(teamInfo)
    switch (ans.teamAdd) {
        case "engineer":
          newEngineer();
          break;
        case "intern":
          nweIntern();
          break;
        case "finish build":
          buildTeam(teamInfo);
          break;
      }
    });
}
function newEngineer(){
    inquirer .prompt([
        {
// engineer questions
        },
        {
            type: "list",
            message: "Would you like to add another team member or finish building?",
            name: "teamAdd",
            choices: [ "engineer", "intern", "finish build" ]
            
        },
        
    ])
    .then((ans) => {
        teamInfo.push(
          new engineer(
            ans.name,
            ans.id,
            ans.email,
            ans.number
          )
        )
    console.log(teamInfo)
    switch (ans.teamAdd) {
        case "engineer":
          newEngineer();
          break;
        case "intern":
          nweIntern();
          break;
        case "finish build":
          buildTeam(teamInfo);
          break;
      }
    });
}

function newIntern(){
    inquirer .prompt([
        {
// intern questions
        },
        {
            type: "list",
            message: "Would you like to add another team member or finish building?",
            name: "teamAdd",
            choices: [ "engineer", "intern", "finish build" ]
            
        },
    ])
    .then((ans) => {
        teamInfo.push(
          new engineer(
            ans.name,
            ans.id,
            ans.email,
            ans.number
          )
        )
    console.log(teamInfo)
    switch (ans.teamAdd) {
        case "engineer":
          newEngineer();
          break;
        case "intern":
          nweIntern();
          break;
        case "finish build":
          buildTeam(teamInfo);
          break;
      }
    });
}

module.exports = managerInfo;
managerInfo();