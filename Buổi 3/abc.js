class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    contructor(name) {
        this.name = name;
        this.created = Date.now();
    }
}

let rabbits = new Rabbit ("White Rabbit");
console.log(rabbits)

class Car {
    constructor(brand, color , seat) {
        this.brand = brand;
        this.color = color;
        this.seat = seat;
    }
    set brand(brand) {
        if (brand == "Audi")
        this.brand = brand;
    }
    get brand() {
        return this.brand + "km/h"
    }
}
let car_1 = new brand ("Audi")
console.log(car_1)


