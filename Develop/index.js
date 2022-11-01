// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMD = require('./utils/generateMarkdown.js')

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
