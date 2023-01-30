const mit = `MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
const gn3 = `                    GNU AFFERO GENERAL PUBLIC LICENSE
Version 3, 19 November 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
`;

const moz = `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work. `;
const apach = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
const boo = `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
const un = `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
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
      "The Unlicense",
      "Mozilla Public License 2.0",
      "GNU GPLv3",
    ],
  },
  {
    type: "input",
    name: "Username",
    message: "What is your Github username?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter valid badges!");
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate(value) {
      if (value !== "") return true;
      else console.log("You must enter valid badges!");
    },
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
    let user = answers.Username;
    let email = answers.email;
    let modlicense = license.split(" ").join("_");
    // const preview = "";
    // switch (license) {
    //   case "MIT":
    //     preview += mit;
    //     break;
    //   case "Apache License 2.0":
    //     preview += apach;
    //     break;
    //   case "Boost Software License 1.0":
    //     preview += boo;
    //     break;
    //   case "The Unlicense":
    //     preview += un;
    //     break;
    //   case "Mozilla Public License 2.0":
    //     preview += moz;
    //     break;
    //   case "GNU GPLv3":
    //     preview += gn3;
    //     break;
    // }
    // console.log(preview);
    const response = `# ${title}
    
    ![License](https://img.shields.io/badge/License-${modlicense}-orange)
    ## Description
    ${desc}
    
    ### Table of Content
    -Description
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contributions](#contributions)
    -[Tests](#contributions)
    -Features
    -Badges
    -[License](#license)

    ### Installation
    ${inst}

    ### Usage
    ${usage}

    ### Contributing
    ${contribute}

    #### Tests
    ${test}

    #### Features
    ${feat}

    #### Badges
    ${badg}
    
    #### How to Contribute
    ${email}
    [myGithub]https://github.com/${user}
    
    ##### License
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
