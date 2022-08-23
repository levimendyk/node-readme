// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'


    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:

[Description](#Description)

[Installation](#Installation)



## Description:  
  
  ${data.description}

## Installation:  
  
  ${data.installation} 


## Usage:  

${data.usage}


## License:
${renderLicenseBadge(data.license)}


## Contributing:  

${data.guidelines}


## Tests:  

${data.tests}


## Questions:

`;
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
};
