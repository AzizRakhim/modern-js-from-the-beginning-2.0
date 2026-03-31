function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape name: ${this.name}`);
};

function Rectangle(name, width, height) {
  Shape.call(this, name);

  this.width = width;
  this.height = height;
}

// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logName = function () {
  console.log(`Rectangle name: ${this.name}`);
};

function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius;
}

// Inherits Circle prototypes
Circle.prototype = Object.create(Shape.prototype);

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle("Rectangle 1", 20, 20);
const cir = new Circle("Circle 1", 30);

// console.log(rect, cir);

rect.logName();
cir.logName();

// console.log(rect.constructor);
