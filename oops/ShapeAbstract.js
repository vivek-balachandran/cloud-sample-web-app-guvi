class Shape {
  constructor() {
    console.log(this.constructor);
    if (this.constructor === Shape) {
      throw new Error("Abstract classes cannot be instantiated.");
    }
  }

  getArea() {
    throw new Error("Method 'getArea()' must be implemented.");
  }
}

class Area extends Shape {
  getArea() {
    console.log("Hey Area");
  }
}

let shape = new Area();
shape.getArea();
