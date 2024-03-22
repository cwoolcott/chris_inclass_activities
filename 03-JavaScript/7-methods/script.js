// .unshift(“item”); //Adds Element to Start of an Array
// .pop(); //Removes the Last Element in the Array
// .concat(); // Joins Arrays and Returns a new Array
// .push(“item”); //Adds to End

const cars = ["Mazda", "Ford", "Jeep", "Subaru", "Kia", "Chevy"];
const car2 = ["Ferraii", "Lambo", "Bugetti"];
cars.unshift("Fiat");
cars.pop();

console.log(cars);




cars.push("Chevy");

const allCars = cars.concat(car2);
console.log("allCars", allCars)

console.log("Final", cars);

