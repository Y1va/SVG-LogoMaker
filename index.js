// Runs the application using imports from lib

const inquirer = require("inquirer");
const fs = require("fs");
// Destructuring with {}
const {Circle, Triangle, Square} = require("./lib/shapes");
const { text } = require("node:stream/consumers");



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
]).then((answers) => {
  console.log("Generating Logo.svg")
  const shapeColor = answers["shape-color"];
  const textColor = answers["text-color"];
  const textContent = answers["characters"];

  let shape;
  if (answers.shape === Circle) {
    shape = new Circle(shapeColor);
  }
  else if (answers.shape === Triangle) {
    shape = new Triangle(shapeColor);
  }
  else if (answers.shape === Square) {
    shape = new Square(shapeColor);
  }


  // Generate SVG with color and text
  const svgLogo = shape.draw({color: textColor, content: textContent})


  // Save SVG to a file
  fs.writeFile("logo.svg", svgLogo, (err) => {
    if (err) {
      console.log("Failed to save SVG");
    } else {
      console.log("SVG saved successfully");
    } 
  })
})