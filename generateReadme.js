function renderLicensebadge(license){
if (license === "unlicense")
{
    return ""
} else{
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}
}

function tocLicense(license){
if (license === "unlicense"){
    return ""
}
else{
    return `- [License(s)](#license)`
}
}

function paragraphLicense(license){
    if (license === "unlicense"){
        return ""
    }
    else{
return `## License: 
 ${license}`
    }
    }

function generateReadme(response) {
    return `
## ${response.title}
${renderLicensebadge(response.license)}
Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${tocLicense(response.license)}
- [Contributing](#contribution)
- [Test(s)](#test)
- [Questions](#questions)
            
## Description: 
${response.description}
## Installation: 
${response.installation}
## Usage: 
${response.usage}
## Contribution: 
${response.contribution}
## Test: 
${response.test}
${paragraphLicense(response.license)}
## Questions:
##Github: 
https://www.github.com/${response.github}/
## Email Address: 
${response.email}`;
}

module.exports = generateReadme;