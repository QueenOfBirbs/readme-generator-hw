const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const generateReadme = require("./generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);;

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the repository?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please type in a brief description.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is required for installation?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the use for this project?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What is required for contribution?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How should this be tested?',
        },
        {
            type: 'list',
            message: 'What license does it have?',
            name: 'license',
            choices: ['MIT', 'Apache', 'Mozilla', 'Affero', 'LGPl-3.0'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your preferred email?',
        },

    ])
}

async function init() {
    try {
        const response = await promptUser();
        const generateContent = generateReadme(response);
        await writeFileAsync('./README.md', generateContent);
        console.log('Success!');
    } catch (err) {
        console.log(err);
    }
}

init();  
