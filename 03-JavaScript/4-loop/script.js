const cars = ["Honda", "Acura", "Toyota", "Mazda", "Yugo", "Chrysler", "Pinto"];


// For Loop
//ES5
for (let i = 0; i < cars.length; i++){

    console.log(`Car:${i+1}`)
    if (cars[i]==="Mazda"){
        console.log(`Mazda's are my favorite`);
    }
    else{
        console.log(`I love ${cars[i]}(s), they are great!`);
    }
}
// For of
//ES7

for (const elephant of cars){
    console.log(`I love ${elephant}(s), they are great!`);
}

const groceryList = ["Milk", "Honey", "Bread", "Butter", "Cheese", "Eggs"];

for (const item of groceryList){
    console.log(`Remember to get ${item}.`)
}



