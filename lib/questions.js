const manager = [
    {
        type: "input",
        name: "name",
        message: "What is your manager's name? ",
        validate: validateAlphaOnly
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's id? ",
        
        
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

const engineer = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name? ",
        validate : validateAlphaOnly

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

const intern = [
    {
        type: "input",
        name: "name",
        message: "What is your interns's name? ",
        validate : validateAlphaOnly
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

function containsNumber(str) {
    return str.match(/([123456789])\w+/)

}
function validateAlphaOnly (answer) {
        if (answer.length === 0) {
            return "Must not be empty"
        }

        if (containsNumber(answer)) {
            return "Numbers not allowed";
        }
         return true;

    }
module.exports = {
    manager, intern, engineer, listing
}