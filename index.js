// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generatemarkdown.js");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "What is the the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the description?",
      name: "description",
    },
    {
      type: "input",
      message: "What is the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage informations?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "guidelines",
    },
    {
      type: "input",
      message: "What are the tests?",
      name: "tests",
    },
    {
        type: "list",
        message: "What is the license you are using?",
        name: "license",
        choices: ["Apache", "MIT", "BOOST", "None"]
      },
  ])
  .then((response) => {
    // Use user feedback for... whatever!!
    const readMeContent = generateReadMe.generateMarkdown(response);
    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// TODO: Create an array of questions for user input
const questions = [
  "What is the link to the GitHub profile?",
  "How to contact for additional questions?",
];

// --Create an array of license options with corresponding badge?? -LEVI
const licenses = [];

// --Create an array of Questions (github profile and email address) -LEVI
const questionsTwo = [];

// TODO: Create a function to write README file
// Do I need this function anymore??? -LEVI
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// What is this??? -LEVI
function init() {}

// Function call to initialize app
init();
