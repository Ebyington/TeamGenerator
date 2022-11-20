const fs = require("fs");

function buildCards(teamInfo) {
    let card = "" 
    for(var i=0; i < teamInfo.length; i++) {
        if (teamInfo[i].getRole() === "manager") {

            card = card + `<div class="container">
            <div class="row justify-content-center" id="team-cards"></div>
             <h1 class="display-4">${teamInfo[i].name}</h1>
             <h1 class="display-4">Manager</h1>
              <ul class="list-group">
               <li class="list-group-item"> ${teamInfo[i].id} </li>
               <li class="list-group-item"> ${teamInfo[i].email} </li>
               <li class="list-group-item"> ${teamInfo[i].officeNumber} </li>
            </ul>
           </div>`
        } else if (teamInfo[i].getRole() === "engineer") {

            card = card + `<div class="container">
            <div class="row justify-content-center" id="team-cards"></div>
             <h1 class="display-4">${teamInfo[i].name}</h1>
             <h1 class="display-4">Engineer</h1>
              <ul class="list-group">
               <li class="list-group-item"> ${teamInfo[i].id} </li>
               <li class="list-group-item"> ${teamInfo[i].email} </li>
               <li class="list-group-item"> ${teamInfo[i].github} </li>
            </ul>
           </div>`
       } else if (teamInfo[i].getRole() === "intern") {

            card = card + `<div class="container">
            <div class="row justify-content-center" id="team-cards"></div>
             <h1 class="display-4">${teamInfo[i].name}</h1>
             <h1 class="display-4">Intern</h1>
              <ul class="list-group">
               <li class="list-group-item"> ${teamInfo[i].id} </li>
               <li class="list-group-item"> ${teamInfo[i].email} </li>
               <li class="list-group-item"> ${teamInfo[i].school} </li>
            </ul>
           </div>`
        } 
    }
       return card;
};

function buildHTML(card) {
    console.log(card);
    return `
    <!DOCTYPE html>
<html lang="en">
        <head>
	     <meta charset="UTF-8">
	     <meta http-equiv="X-UA-Compatible" content="IE=edge">
	     <meta name="viewport" content="width=device-width, initial-scale=1.0">
	     <title>Team Generator!</title>
	        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	        <link rel="stylesheet" href="style.css">
        </head>
<body>
	 <header>
	  <h1 class="jumbotron text-center">My Team</h1>
	 </header>
	<main> ${card}</main>
</body>
</html>
`
};

module.exports = {buildCards, buildHTML};