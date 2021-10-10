// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    message: 'Please enter your Github username.',
    name: 'username',
},
{
    type:'input',
    message: 'Please enter your email.',
    name: 'email',
},
{
    type:'input',
    message: 'What is the name of your project?',
    name: 'title',
},
{
    type:'input',
    message: 'Enter a description about your project.',
    name: 'description',
},
{
    type: 'list',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    name: 'license',
},
{
    type: 'input',
    message: 'What command should be run to install dependecies?',
    default: 'npm i',
    name: 'installation',
},
{
    type: 'input',
    message: 'What command should be run to run tests?',
    default: 'npm test',
    name: 'test',
},
{
    type:'input',
    message: 'What do users need to know about the repo?',
    name: 'usage',
},
{
    type:'input',
    message: 'What do users need to know about contributing to the repo?',
    name: 'contributing',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
