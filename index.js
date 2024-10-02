// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Project description:',

    },

    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',

    },

    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',

    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute:',

    },

    {
        type: 'input',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],

    },

    {
        type: 'input',
        name: 'github',
        message: 'Github username:',

    },

   
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md generated successfully!');
      }
    });
  }

// TODO: Create a function to initialize app
function initializeApp() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate the README content using the answers
            const readmeContent = `# ${answers.title}

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contribution}

## License

This project is licensed under the ${answers.license} license.

## Questions

For any questions, please reach out to me at [${answers.email}](mailto:${answers.email}) or visit my GitHub profile at [${answers.github}](https://github.com/${answers.github}).
`;

            // Call the function to write the README file
            writeToFile('README.md', readmeContent);
        });
}



// Function call to initialize app
initializeApp();
