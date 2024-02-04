// PULL IN DEPENDANCIES AND SHAPES FILE
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const fs = require('fs');

// VALIDATION FOR USERS TO ENTER 3 OR LESS CHARS FOR LOGO TEXT
const validateInput = (name) => {
    if (name.length > 3) {
      return 'Please enter up to 3 characters only.';
    }
    return true;
};

// USER INPUT/SELECTION
inquirer.prompt([
    {
        message: 'Please enter up to 3 characters:',
        name: 'characters',
        validate: validateInput
    },
    {
        message: 'Please enter the text color (name or hexadecimal):',
        name: 'text-color'
    },
    {
        type: 'list',
        message: 'Please choose logo shape:',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
    },
    {
        message: 'Please enter the shape color (name or hexadecimal):',
        name: 'shape-color'
    }
]).then((answers) => {
    console.log('Generated logo.svg');
    const shapeColor = answers['shape-color'];
    const textColor = answers['text-color'];
    const textContent = answers['characters'];
    let shape;
    if (answers.shape === 'Circle') {
        shape = new Circle(shapeColor);
    } else if (answers.shape === 'Triangle') {
        shape = new Triangle(shapeColor);
    } else if (answers.shape === 'Square') {
        shape = new Square(shapeColor);
    }
    // GENERATE SVG WITH INPUTED COLOR AND TEXT
    const svgLogo = shape.draw({ color: textColor, content: textContent });
    // DAVING SVG TO FILE
    fs.writeFile('logo.svg', svgLogo, (err) => {
        if (err) {
            console.error('Failed to save SVG:', err);
        } else {
            console.log('SVG logo saved to logo.svg');
        }
    });
});