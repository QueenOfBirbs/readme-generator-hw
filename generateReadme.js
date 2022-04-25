function renderLicensebadge(license){
if (license === "unlicense")
{
    return ""
} else{
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
}
}

function tocLicense(license){
if (license === "unlicense"){
    return ""
}
else{
    return `- [License(s)](#licenses)`
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
## Installation Instructions: 
${response.installation}
## Usage Guidelines: 
${response.usage}
## Contribution Rules: 
${response.contribution}
## Test Suggestions: 
${response.test}
${paragraphLicense(response.license)}
## Github: 
www.github.com/${response.github}/
## Email Address: 
${response.email}`;
}

module.exports = generateReadme;