// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<br>
  ## Description:  
  <br>
  ${data.description}
  <br>
  <br>
  ## Installation:  
  <br>
  ${data.installation} 
<br>
<br>
## Usage:  
<br>
${data.usage}
<br>
<br>
## Contribution Guidelines:  
<br>
${data.guidelines}
<br>
<br>
## Tests:  
<br>
${data.tests}
<br>`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
