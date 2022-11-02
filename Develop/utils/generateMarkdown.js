// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Markdown representation of an image using ![A test image](image.png) to put an image reference directly into the editor.

const { default: ListPrompt } = require("inquirer/lib/prompts/list")

function renderLicenseBadge(license) {

  if (license == 'MIT'){
    return `![MIT](https://img.shields.io/badge/License-MIT-brightgreen?style=flat-square)`
  } else if (license == 'APACHE') {
    return `![APACHE](https://img.shields.io/badge/License-APACHE%202.0-brightgreen?style=flat-square)`
  } else if (license == 'GNU') {
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
  } else if (license == 'APACHE'){
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

/* ---------------------
In this block of funtion:

The idea that I had was to create a variable that will store the badge first. 
If input is blank and the user hit enter, it will return an empty string. Data will be store in empty variable.  
I want to use the renderLicense...() Functions that comsume input about license choice.
I want to create string literal, concatnating choices from renderLicense functions 

------------------ */
function renderLicenseSection(license) {
  let licenseBadge = ``
  if (license == 'None'){
    return 
  }
  // loop over badges and links,  
  for (let i = 0; i < license.lentgh; i++){
   let badge = renderLicenseBadge(license[i])
   console.log(badge)
   let badgeLink = renderLicenseLink(license[i])
   licenseBadge += `![License](${badge}${badgeLink})\n`
  }
  return `## ${licenseBadge}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.title)}

  ## Description
  ${data.discription}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contribution 
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions

  - Created By: ${data.user}
  - GitHub: ${data.gitHub}
  - Email: ${data.eMail}
`;
}

module.exports = generateMarkdown;
