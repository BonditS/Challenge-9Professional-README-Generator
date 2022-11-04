// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMD = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the tile of your project?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your userName?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email account:'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub account'
    },
    {
        type:'input',
        name:'description',
        message: 'Enter project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage discription:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['None', 'MIT', 'APACHE', 'GNU', 'BSD']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'video',
        message: 'Enter walkthrough video'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err?console.log(err):console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data)=>{writeToFile(`README.md`, generateMD(data))})
}

// Function call to initialize appn
init();
