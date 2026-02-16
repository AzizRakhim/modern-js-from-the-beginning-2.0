const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

function createRectangle(width, height) {
  return Object.create(rectanglePrototypes, {
    width: { value: width },
    height: { value: height },
  });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(20, 20);
console.log(rect2.area());
