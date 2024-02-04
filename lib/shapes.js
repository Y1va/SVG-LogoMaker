// PARENT SHAPE CLASS CONSTRUCTOR
class Shape {
  constructor(shapeColor) {
      this.shapeColor = shapeColor;
  }
  draw() {
      throw new Error('draw() method must be implemented in the derived class');
  }
}
// CIRCLE CLASS CONSTRUCTOR
class Circle extends Shape {
  constructor(shapeColor) {
      super(shapeColor);
  }
  draw(text) {
      const radius = 100;
      const fontSize = 70;
      const textY = 95 + fontSize / 2; // Center vertically by adding half of the font size to the y coordinate
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
              <circle cx="150" cy="100" r="${radius}" fill="${this.shapeColor}" />
              <text x="150" y="${textY}" text-anchor="middle" fill="${text.color}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold">${text.content}</text>
            </svg>`;
  }
}
// TRIANGLE CLASS CONSTRUCTOR
class Triangle extends Shape {
  constructor(shapeColor) {
      super(shapeColor);
  }
  draw(text) {
      const sideLength = 173.21;
      const height = 200;
      const base = (sideLength / 2).toFixed(2);
      const fontSize = 30;
      const textY = 130 + fontSize / 2; // Center vertically by adding half of the font size to the y coordinate
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
              <polygon points="150,0 ${base},${height} ${300 - base},${height}" fill="${this.shapeColor}" />
              <text x="150" y="${textY}" text-anchor="middle" fill="${text.color}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold">${text.content}</text>
            </svg>`;
  }
}
// SQUARE CLASS CONSTRUCTOR
class Square extends Shape {
  constructor(shapeColor) {
      super(shapeColor);
  }
  draw(text) {
      const size = 150;
      const x = (300 - size) / 2;
      const y = (200 - size) / 2;
      const fontSize = 60;
      const textY = y + size / 2 + fontSize / 3;
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
              <rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.shapeColor}" />
              <text x="150" y="${textY}" text-anchor="middle" fill="${text.color}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold">${text.content}</text>
            </svg>`;
  }
}
// EXPORT CLASSES TO INDEX.JS
module.exports = {
  Shape,
  Circle,
  Triangle,
  Square
};