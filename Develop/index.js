// TODO: Include packages needed for this application
console.log("you are running my generator!");
// const write = require("node:fs");
// TODO: Create an array of questions for user input
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
// TODO: Create a function to write README file
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
    // (license) => {
    //   switch (license) {
    //     case "MIT":
    //       //Statements executed when the
    //       //result of expression matches value1
    //       break;
    //     case "Apache License 2.0":
    //       //Statements executed when the
    //       //result of expression matches value2
    //       break;

    //     case "Boost Software License 1.0":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "Eclipse":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "The Hippocratic":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "IBM":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "ISC License":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "Mozilla Public License 2.0":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "GNU GPLv2":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "GNU GPLv3":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;
    //     case "The Unlicense":
    //       //Statements executed when the
    //       //result of expression matches valueN
    //       break;

    //     default:
    //       //Statements executed when none of
    //       //the values match the value of the expression
    //       break;
    //   }
    // };
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
    ![${license}](https://img.shields.io/badge/License-${license}-orange)

    ## License
    ${license}
    `;

    // Use user feedback for... whatever!!
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

// const data = "you typed something";

// const fs = require("fs/promises");
// fs.writeFile("index.html", data);
