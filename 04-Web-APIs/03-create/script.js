const carsEl = document.querySelector("#cars");

// const carArray = ["Mazda Rx-7", "Toyota Celica", "Ford Probe", "Mazda Miata", "Lambo"];

// for (car of carArray){
//     const carEl = document.createElement("li");
//     carEl.textContent = car;
//     carEl.setAttribute("style", "color:red; font-weight:bold; background-color:#333");
//     carEl.setAttribute("data-carname", car.toLowerCase());
//     carsEl.append(carEl);
// }

const car1El = document.createElement("li");
car1El.textContent = "Mazda Rx-7";
car1El.setAttribute("style", "color:red; font-weight:bold; background-color:#333");
car1El.setAttribute("class", "someClass");
car1El.setAttribute("data-price", "1313123123");
carsEl.append(car1El);

const car2El = document.createElement("li");
car2El.textContent = "Toyota Camry";
carsEl.append(car2El)

const car3El = document.createElement("li");
car3El.textContent = "Ford Probe";
carsEl.append(car3El)

