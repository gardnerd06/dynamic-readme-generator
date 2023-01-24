// TODO: Include packages needed for this application
console.log("you are running my generator!");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validat() {},
  },
  {
    type: "input",
    name: "description",
    message: "Using a few sentences, please describe your project.",
    validat() {},
  },
  {
    type: "input",
    name: "installation",
    message: "Where can the code for this project be found?",
    validat() {},
  },
  {
    type: "input",
    name: "usage",
    message: "What might this project be used for?",
    validat() {},
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
    validat() {},
  },
  {
    type: "input",
    name: "tests",
    message: "Please lists any tests you have for this project.",
    validat() {},
  },
  {
    type: "input",
    name: "features",
    message: "What are some notable features of your project?",
    validat() {},
  },
  {
    type: "input",
    name: "badges",
    message: "Do you have any badges?",
    validat() {},
  },
  {
    type: "list",
    name: "License",
    message: "What type of license will you use?",
    choices: "MIT",
  },
];
// Title, Description, Installation, Usage, Contributing, and Tests
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

const inquirer = require("inquirer");
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// Function call to initialize app
init(inquirer);
