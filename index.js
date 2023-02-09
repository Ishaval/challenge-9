const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    // ... questions ...
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information: '
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines: '
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions: '
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: '
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username: '
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the license for your project: '
    },
  ];
  
  inquirer.prompt(questions).then(answers => {
    const readme = `# ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## License
    This project is licensed under the ${answers.license} license.
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    ${answers.test}
    
    ## Questions
    If you have any questions, feel free to reach out to me at [${answers.email}](mailto:${answers.email}). You can also check out my GitHub profile at [https://github.com/${answers.username}].
    `;
  
  
  fs.writeFile('README.md', readme, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('The README has been generated!');
  });
})
