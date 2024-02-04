// Runs the application using imports from lib

const inquirer = require("inquirer");
const fs = require("fs");
// Destructuring with {}
const {Circle, Triangle, Square} = require("./lib/shapes");



// Only let users enter 3 characters or less for their logo text

const validateInput = function(name) {
  if (name.length > 3) {
    return "Please enter up to 3 characters only";
  }
  return true;
}

inquirer.prompt([
  {
    message: "Please enter up to 3 characters",
    name: "characters",
    validate: validateInput
  },
  {
    message: "Please enter the text colour (Name or hexidecimal)",
    name: "text-color"
  },
  {
    message: "Please choose logo shape",
    type: "list",
    choices: [
      "Circle",
      "Triangle",
      "Square"
    ],
    name: "shape"
  },
  {
    message: "Please enter the shape colour (Name or hexidecimal)",
    name: "shape-color"
  }
]);