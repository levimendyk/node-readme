// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return a string "No License"
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BOOST") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else license === "None";
  return "No License";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)


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

- GitHub Profile Link?  ${data.link}
- Email Address for Additional Questions?  ${data.email}
`;
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
};
