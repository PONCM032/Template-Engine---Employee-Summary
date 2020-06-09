const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//array to push to
let employees = [];

console.log("Please add your employees!");

const roleChoice = [
  {
    type: "list",
    name: "choice",
    message: "Which type of team member would you like to add?",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];

const managerChoice = [
  {
    type: "input",
    name: "name",
    message: `What is your manager's name?`,
  },
  {
    type: "input",
    name: "id",
    message: "What is your manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your manager's office number?",
  },
];

const engineerChoice = [
  {
    type: "input",
    name: "name",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's GitHub username?",
  },
];

const internChoice = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is your intern's school?",
  },
];

function managerPrompt() {
  inquirer.prompt(managerChoice).then(function (managerAnswer) {
    let manager = new Manager(
      managerAnswer.name,
      managerAnswer.id,
      managerAnswer.email,
      managerAnswer.officeNumber,
    );
    employees.push(manager);
    loopPrompt();
  });
}

function engineerPrompt() {
  inquirer.prompt(engineerChoice).then(function (engineerAnswer) {
    let engineer = new Engineer(
      engineerAnswer.name,
      engineerAnswer.id,
      engineerAnswer.email,
      engineerAnswer.github
    );
    employees.push(engineer);
    loopPrompt();
  });
}

function internPrompt() {
  inquirer.prompt(internChoice).then(function (internAnswer) {
    let intern = new Intern(
      internAnswer.name,
      internAnswer.id,
      internAnswer.email,
      internAnswer.school
    );
    employees.push(intern);
    loopPrompt();
  });
}

function loopPrompt() {
  inquirer.prompt(roleChoice).then(startPrompt);
}

function startPrompt(answer) {

  switch(answer.choice) {
    case "Manager":
      managerPrompt();
      // console.log(employees);
      break;
    case "Engineer":
      engineerPrompt();
      // console.log(employees);
      break;
    case "Intern":
      internPrompt();
      // console.log(employees);
      break;
    default:
      fs.writeFileSync(outputPath, render(employees), "utf-8");
      console.log("Thank you for adding your employees!");
  }
}

loopPrompt();
