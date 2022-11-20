const fs = require("fs");
const jest = require("jest");
const inquirer = require("inquirer");

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const {buildHTML, buildCards} = require("./src/writeHTML");

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
            name: "id"
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
          newIntern();
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
            type: "input",
            message: "Please enter engineer's name",
            name: "name"       
        },
        {
            type: "input",
            message: "Please enter engineer's employee ID",
            name: "id"       
        },
        {
            type: "input",
            message: "Please enter engineer's email",
            name: "email"       
        },
        {
            type: "input",
            message: "Please enter engineer's Github username",
            name: "gh"       
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
            ans.gh
          )
        )
    console.log(teamInfo)
    switch (ans.teamAdd) {
        case "engineer":
          newEngineer();
          break;
        case "intern":
          newIntern();
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
            type: "input",
            message: "Please enter intern's name",
            name: "name"       
        },
        {
            type: "input",
            message: "Please enter intern's employee ID",
            name: "id"       
        },
        {
            type: "input",
            message: "Please enter intern's email",
            name: "email"       
        },
        {
            type: "input",
            message: "Please enter intern's school",
            name: "school"       
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
          new intern(
            ans.name,
            ans.id,
            ans.email,
            ans.school
          )
        );
    console.log(teamInfo)
    switch (ans.teamAdd) {
        case "engineer":
          newEngineer();
          break;
        case "intern":
          newIntern();
          break;
        case "finish build":
          buildTeam(teamInfo);
       
          break;
      }
    });
}

function buildTeam(teamInfo) {
   const cardTeam = buildCards(teamInfo);
   const HTML = buildHTML(cardTeam);
   console.log(HTML)
   fs.writeFile('./dist/index.html', HTML, (err) =>
   err ? console.log(err) : console.log('Successfully created index.html!')
)};

module.exports = managerInfo;
managerInfo();