// const { exclude } = require("inquirer/lib/objects/separator");
// const events = require("inquirer/lib/utils/events");

// const car = document.querySelector("div");
// const countEl = document.querySelector("section");
//const addButton = document.querySelector("button");
const submitForm = document.querySelector("#submitForm");

// let count = 0;

// function clicked(){
//     count++;
//     countEl.textContent = count;
// }

// addButton.addEventListener("click", clicked)



// car.addEventListener("click",function() {    
// 	console.log("User has clicked " + car.textContent);
// 	console.log("price", car.dataset.price);
//   	console.log("sold", car.dataset.sold);
// });

// function doSomethingwithSubmit(e){
// 	console.log("SUBMITTED")
// 	e.preventDefault();
// }

submitForm.addEventListener("click", function(e){

	e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    
    document.querySelector("h1").textContent = firstName + " " + lastName;

})

