function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.sold = false;
    this.wheels = 4;
    this.color = "gray";
    this.honk = function(){
        console.log(`The ${this.make} ${this.model} goes Beep!`)
    }
}




const mazda = new Car("Mazda", "Rx-7", 1993);
const toyota = new Car("Toyota", "Celica", 1995);
const ford = new Car("Ford", "Probe", 1999);

Car.prototype.fullCar = function(){
    return this.make + " " + this.model;
}

Car.prototype.gasTank = "100%";

const carArray = ["Mazda", "Ford", "Honda"];
const fruit = ["Apple", "Pear"]

Array.prototype.pullSecondItem = function(){
    return this[1];
}

Array.prototype.pushCheese = function(){
    return this.push("Cheese");
}

console.log(carArray.pushCheese());
console.log(fruit.pushCheese())

console.log(carArray);
console.log(fruit)
// toyota.honk();

//console.log(ford.fullCar());


// console.log(mazda, toyota, ford)

