const weatherCheck = function (temp) {
    if (typeof temp === "number"){
        if (temp < 32){
            return "It's Freezing Out";
        }
        else if (temp > 31 && temp < 60){
            return "It's Refreshing";
        }
        else {
            return "Nice Out!"
        }
    }
    else{
        if (temp === "freezing"){
            return 32;
        }
        else if (temp === "Refreshing"){
            return 50;
        }
        else{
            return 75;
        }
    }
}

console.log(weatherCheck(10));
console.log(weatherCheck("freezing"));