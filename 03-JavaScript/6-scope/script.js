
//Global
const favAnimal = "cat";
let sound =  "Woof!";

const whatYourFavoriteAnimal = function(){
    console.log(favAnimal);
}

console.log("sound1", sound)

const animalSound = function(){
    sound = "Meow";
    console.log(sound + " goes the " + favAnimal);
    const anotherSound = function(){
        console.log("Another Sound:", sound);
    }
    anotherSound();
}

console.log("sound2", sound)

whatYourFavoriteAnimal();

animalSound();

console.log("sound3", sound)

alert(sound);
let agreed = confirm("Do you Agree?");
let numOfAnimals = prompt("How many animals do you have?");