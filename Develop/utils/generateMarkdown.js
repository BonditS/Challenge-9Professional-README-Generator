// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Markdown representation of an image using ![A test image](image.png) to put an image reference directly into the editor.

const { default: ListPrompt } = require("inquirer/lib/prompts/list")

function renderLicenseBadge(license) {

  if (license == 'MIT'){
    return `![MIT](https://img.shields.io/badge/License-MIT-brightgreen?style=flat-square)`
  } else if (license == 'APACHE') {
    return `![APACHE](https://img.shields.io/badge/License-APACHE%202.0-brightgreen?style=flat-square)`
  } else if (license == 'GPL') {
    return `![GNU](https://img.shields.io/badge/License-GNU%20v3.0-brightgreen?style=flat-square)`
  } else if (license == 'BSD') {
    return `![BSD](https://img.shields.io/badge/License-BSD%202%20Clause-brightgreen?style=flat-square)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  } else if (liscense == 'APACHE'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license == 'GNU'){
    return 'https://opensource.org/licenses/GPL-3.0'
  } else if (license == 'BSD'){
    return 'https://opensource.org/licenses/BSD-2-Clause'
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
