function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width + this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 10, 10);
console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle("Rectangle 2", 20, 10);
const rect3 = new Rectangle("Rectangle 3", 30, 30);

console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area());

// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The `this` keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);
