const numbers = [2,5,2,5,6,7];

const total = numbers.reduce(function(accumulator, currentValue){
    console.log("accumulator", accumulator, "currentValue", currentValue)
    return accumulator + currentValue;
});


console.log("total", total);

const names = ["Alex", "Dia", "Justin", "Scott", "Matt"];

const namesTotal = names.reduce(function(accumulator, currentValue){
    console.log("accumulator", accumulator, "currentValue", currentValue)
    return accumulator + " " + currentValue;
});

console.log("namesTotal", namesTotal)





