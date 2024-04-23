// const sayHi = function(name){
//     return `HI THERE ${name}!`;
// }

// const sayHi = name => `HI THERE ${name}!`;

const favCar = function (carMake, carModel) {
    return carMake + " " + carModel;
}

const favCar2 = (carMake, carModel) => carMake + " " + carModel;

const carObject = {
    make: "Madza",
    model: "Rx-7",
    honk: function() {
        console.log(`The  ${this.make} ${this.model} goes Beep!`)
    }
}

for (carKeys in carObject){
    console.log("carKeys", carKeys, carObject[carKeys])
}

carObject.honk();
