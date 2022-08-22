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
  "What is the project title?",
  "What is the description?",
  "What is the installation instructions?",
  "What is the usage informations?",
  "What are the contribution guidelines?",
  "What are the tests?",
];

// --Create an array of license options with corresponding badge?? -LEVI
const licenses = [];

// --Create an array of Questions (github profile and email address) -LEVI
const questionsTwo = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// --Added this to writeFile (might want to use appendFile) --LEVI
// fs.writeFile("README.md", process.argv[2], (err) =>
//   err ? console.error(err) : console.log("Success!")
// );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
