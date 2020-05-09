const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const myTeam = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your manager's name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's id? "
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email? "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number? "
    }


];


const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's id? "
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email? "
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your engineer's GitHub username? "
    }

];
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your interns's name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is your interns's id? "
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email? "
    },
    {
        type: "input",
        name: "school",
        message: "What is your intern's school? "
    }
];
const listing = [
    {
        type: "list",
        name: "menu",
        message: "Which type of team member would you like to add? ",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"]
    }
]
console.log("Please build your team");

function startBuildingTeam() {
    inquirer.prompt(managerQuestions)
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
    inquirer.prompt(listing)
        .then(answers => {
            if (answers.menu === "Engineer") {
                inquirer.prompt(engineerQuestions).then(answers => {
                    const memberEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
                    myTeam.push(memberEngineer);
                    console.log(myTeam);
                    addMember();
                })

            } else if (answers.menu === "Intern") {
                inquirer.prompt(internQuestions).then(answers => {
                    const memberIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    myTeam.push(memberIntern);
                    console.log(myTeam);
                    addMember();
                })


            } else {
                //render(myTeam);
                       
                       
try {
                    if (fs.existsSync(OUTPUT_DIR)) {
                        console.log("Directory exists.")
                        

                        //console.log("Directory exists.")
                    } else {
                        fs.mkdirSync(OUTPUT_DIR)
                        
                        fs.writeFile(outputPath,render(myTeam),err => {
                            console.error(err);
                        })
                        console.log("Generating Your Team")
                    }
                } catch (e) {
                    console.log("An error occurred.")
                }


                // After you have your html, you're now ready to create an HTML file using the HTML
                // returned from the `render` function. Now write it to a file named `team.html` in the
                // `output` folder. You can use the variable `outputPath` above target this location.
                // Hint: you may need to check if the `output` folder exists and create it if it
                // does not.

            }
        }).catch(err => {
            console.log(err);
        })



}


//console.log(myTeam);

startBuildingTeam();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
