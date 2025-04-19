class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log('Some generic sound!')
    }
}

//Below example of method riding
class Dog extends Animal {
    makeSound() {
        console.log('Woh woh')
    }

}

// Below example for method overload but in javascript it will not support using swith and based on input length you can perform the opearion
class Elephant extends Animal {
    makeSound(l1) {
        console.log('Hello 1')
    }

    makeSound(l1, l2) {
        console.log('Hello 2')
    }
}
// Above example is not working every 2nd makeSound function will call

const dog = new Dog()

dog.makeSound(1)

dog.makeSound(1, 2)