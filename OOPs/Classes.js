// Classes: A class is a blueprint for creating objects. It defins properties and methods that the objects created from the class will have

class Check {
    getBalance() {
        throw new Error("Method not implemented.")
    }
    deposite(arg0) {
        throw new Error("Method not implemented.")
    }
    constructor(name, age) {
        this.name = name
        this.age = age
    }


    greet = () => {
        console.log(`Hello ${this.name} and your age is ${this.age}`)
    }
}


let a = new Check("Jeet", 20)

a.greet()