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
            type: 'checkbox',
            message: 'What licenses does it have?',
            name: 'licenses',
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clear-clause', 'family cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'lppl-1.3c', 'ms-pl', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib'],
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
