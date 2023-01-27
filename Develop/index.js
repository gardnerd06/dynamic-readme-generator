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
      "Apache",
      "Boost",
      "Eclipse",
      "The Hippocratic",
      "IBM",
      "ISC",
      "Mozilla",
    ],
  },
];
// Title, Description, Installation, Usage, Contributing, and Tests
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Created a function to initialize app
function init(inquirer) {}
const inquirer = require("inquirer");
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    const toc = [];
    for (let i = 0; i < questions.length; i++) {
      console.log(questions[i].name);
      toc.push(questions[i].name);
      // Use user feedback for... whatever!!
    }
    console.log(toc);
    // filehandle.writeFile("ReadMe.md", toc);
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
