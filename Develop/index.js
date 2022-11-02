// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMD = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    'What is your userName?',
    'What is your GitHub Account?',
    'Enter your email account:',
    'Enter project description:',
    'Enter installation instructions',
    'Enter usage discription:',
    'Please choose a license:',
    'Enter contribution guidelines',
    'Enter test instructions:',
];

// Promt for user 
function userInput(){
inquirer
    .promt([
        {
            type: 'input',
            name: 'userName',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'gitHub',
            questions: questions[1]        
        },
        {
            type: 'input',
            name: 'email',
            message: questions[2]
        },
        {
            type:'input',
            name:'description',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[5]
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[6],
            choices: ['None', 'MIT', 'APACHE', 'GNU', 'BSD']
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[8]
        }
    ])
    
    .then((data) => {
        writeToFile(generateMD(data))
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err ? console.error(err) : console('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    userInput()
}

// Function call to initialize appn
init();
