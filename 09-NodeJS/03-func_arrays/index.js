const cars = ["Rx-7", "Probe", "Kia", "Civic", "Ford", "Ferrari"];

for (let i = 0; i<cars.length; i++){
    console.log(cars[i])
}

const notFordCars = cars.filter((car) => !(car==="Ford" || car==="Probe"))


//console.log("notFordCars", notFordCars)

const menu = [
    {item:"coffee", calories:10},
    {item:"fries", calories:400},
    {item:"cheeseburger", calories:700}
];

const menuItems = menu.map((menuItem)=> menuItem.item)
console.log(menuItems);

const over300Calories = menu.filter((menuItem) => menuItem.calories > 300);
console.log("over300Calories", over300Calories);

menu.forEach((menuItem, i)=>{
    console.log(`I like ${menuItem.item}. Index: ${i}`)
}) 









