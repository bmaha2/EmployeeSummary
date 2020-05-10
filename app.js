
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const myTeam = [];
console.log("Please build your team");

function startBuildingTeam() {
    inquirer.prompt(questions.manager)
        .then(answers => {
            const member = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            myTeam.push(member);
            console.log(myTeam);
            addMember();
        }).catch(err => {
            console.log(err);
        })
}

function addMember() {
    inquirer.prompt(questions.listing)
        .then(answers => {
            if (answers.menu === "Engineer") {
                inquirer.prompt(questions.engineer).then(answers => {
                    const memberEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
                    myTeam.push(memberEngineer);
                    console.log(myTeam);
                    addMember();
                })
            } else if (answers.menu === "Intern") {
                inquirer.prompt(questions.intern).then(answers => {
                    const memberIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    myTeam.push(memberIntern);
                    console.log(myTeam);
                    addMember();
                })
            } else {
                try {
                    if (fs.existsSync(OUTPUT_DIR)) {
                        console.log("Directory exists.")
                    } else {
                        fs.mkdirSync(OUTPUT_DIR)

                        fs.writeFile(outputPath, render(myTeam), err => {
                            console.error(err);
                        })
                        console.log("Generating Your Team")
                    }
                } catch (e) {
                    console.log("An error occurred.")
                }
            }
        }).catch(err => {
            console.log(err);
        })
}
startBuildingTeam();

