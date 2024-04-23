//Spread

const myName = ["Chris" , "Woolcott"];
const myDetails = ["Developer" , "Minnesota"];
const newArr = [...myName , ...myDetails, "somethingelse"];
// console.log(newArr) ; // ["Chris" , "Woolcott" , "Developer" , "Minnesota"] ;

const car = {
    make: "Mazda",
    model: "Rx-7",
    dealer: "Carosaul",
  };
  
const dealerShip = {
    dealer: "Morries",
    location: "Minnetonka"
};

const newObj = {
    ...car,
    ...dealerShip,
    dealer: "Sears Import Auto",
}

console.log("newObj", newObj)

//Rest
function myData(arg1, arg2, ...arg_rest){
    console.log("arg1", arg1) // "Chris"
    console.log("arg2", arg2) // "Minnesota"
    console.log("arg_rest", arg_rest) ; // ["Developer","Likes Cars"]
    arg_rest.forEach(function(detail){
        console.log(detail + ":")
    })

}
myData("Chris","Minnesota","Developer", "Likes Cars", "Likes Family", "Has Dogs") ;

const [developer, ...hobbies] = ["Chris", "Cars", "Dogs", "Family", "Developing"];

console.log("developer", developer)
console.log("hobbies", hobbies)
    

