// Polimorphisam:- Polimorphisam allows methods to have diffrent implementation based on the object that calls them

class Shape {
    area() {
        return 0
    }
}

class Circle extends Shape {

    constructor(radius) {
        super()

        // -> Why super is needed here
        // In JavaScript, when a class extends another class, its constructor must call super() before using this.
        // super() calls the constructor of the parent class (Shape in this case).
        // This sets up the inheritance chain properly.
        // It ensures the this keyword is initialized correctly.

        this.radius = radius
    }

    area() {
        return Math.PI * this.radius * this.radius
    }
}

const circle = new Circle(4)

console.log(circle.area())