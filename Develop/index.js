const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter a valid Title!");
    },
  },
  {
    type: "input",
    name: "Description",
    message:
      "Using a few sentences, please describe your project.(180 character minimum)",
    validate(value) {
      if (value.length > 180) return true;
      else console.log("You must enter a longer Description!");
    },
  },
  {
    type: "input",
    name: "Installation",
    message: "Where can the code for this project be found?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter a valid URL!");
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "What might this project be used for?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter a valid response!");
    },
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to this project?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter contributers!");
    },
  },
  {
    type: "input",
    name: "Tests",
    message: "Please lists any tests you have for this project.",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter a valid test option!");
    },
  },
  {
    type: "input",
    name: "Features",
    message: "What are some notable features of your project?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter a valid features!");
    },
  },
  {
    type: "input",
    name: "Badges",
    message: "Do you have any badges?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter valid badges!");
    },
  },
  {
    type: "list",
    name: "License",
    message: "What type of license will you use?",
    choices: [
      "MIT",
      "Apache License 2.0",
      "Boost Software License 1.0",
      "Eclipse",
      "The Hippocratic",
      "IBM",
      "ISC License",
      "Mozilla Public License 2.0",
      "GNU GPLv2",
      "GNU GPLv3",
      "The Unlicense",
    ],
  },
];
// Title, Description, Installation, Usage, Contributing, and Tests
function writeToFile(fileName, data) {
  const fs = require("fs/promises");
  fs.writeFile(fileName, data);
}

// Created a function to initialize app
function init(inquirer) {}
const inquirer = require("inquirer");
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    let title = answers.Title;
    let desc = answers.Description;
    let inst = answers.Installation;
    let usage = answers.Usage;
    let contribute = answers.Contributing;
    let test = answers.Tests;
    let feat = answers.Features;
    let badg = answers.Badges;
    let license = answers.License;
    let modlicense = license.split(" ").join("_");

    const response = `# ${title}
    
    
    ### Description
    ${desc}

    ## Installation
    ${inst}

    ## Usage
    ${usage}

    ## Contributing
    ${contribute}

    ## Tests
    ${test}

    ## Features
    ${feat}

    ## Badges
    ${badg}
    ![License](https://img.shields.io/badge/License-${modlicense}-orange)

    ## License
    ${license}
    `;

    console.log(license);
    writeToFile("ReadMe.md", response);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Something went wrong!");
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// Function call to initialize app
init(inquirer);
