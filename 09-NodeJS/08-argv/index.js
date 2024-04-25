console.log(process.argv)

// console.log(`HI ${process.argv[2]}!!!!`);

// const num1 = parseInt(process.argv[2]);
// const num2 = parseInt(process.argv[3]);

// console.log(`Your total is  ${num1 + num2}`);

// let sentence = "";

// for (let i = 2; i < process.argv.length; i++){
//     sentence = sentence + process.argv[i] + " ";
// }

// console.log(sentence.toUpperCase());

let total = 0;

for (let i = 2; i < process.argv.length; i++){
    total = total + parseInt(process.argv[i]);
}

console.log("TOTAL: ", total)


