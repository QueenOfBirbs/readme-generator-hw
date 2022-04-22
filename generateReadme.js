function generateReadme(response) {
    return `
        Title: ${response.title}
            --Table of Contents:--
            -[Description]
            -[Installation]
            -[Usage]
            -[License(s)]
            -[Contributing]
            -[Test(s)]
            -[Questions]
            
                --Description: ${response.description}
                --Installation Instructions: ${response.installation}
                --Usage Guidelines: ${response.usage}
                --Contribution Rules: ${response.contribution}
                --Test Suggestions: ${response.test}
                --Licenses: ${response.licenses}
                --Github: www.github.com/${response.github}/
                --Email Address: ${response.email}`;
}

module.exports = generateReadme;