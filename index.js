// index.js
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "GPLv3", "Apache", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function generateREADME(answers) {
  return `# ${answers.title}

${getLicenseBadge(answers.license)}

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
${getLicenseText(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please reach out to [${answers.github}](https://github.com/${answers.github}) or email me at ${answers.email}.
`;

function getLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}

function getLicenseText(license) {
  if (license === "None") {
    return "This project is not licensed.";
  } else {
    return `This project is licensed under the ${license} License.`;
  }
}
}

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);

  fs.writeFile("README.md", readmeContent, (err) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("README.md generated successfully!");
    }
  });
});
