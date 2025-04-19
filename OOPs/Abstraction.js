class Shape {
    constructor() {
        if (new.target == Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly");
        }
    }

    area() {
        throw new Error("Method 'area()' must be implemented.");
    }

    describe() {
        console.log(`This ares is ${this.area()}`)
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return Math.PI * this.radius * this.radius
    }
}

let a = new Circle(4)

a.describe()


//Below code gives error of := throw new Error("Cannot instantiate abstract class Shape directly");
let s = new Shape()
s.describe()