const fs = require("fs");
const firstName = process.argv[2];

const writeFile = function(data){
    fs.writeFile("message.txt", data, function(err){
        console.log(err ? err : "Written Successfully");
    });
}

const readFile = function(){
    fs.readFile("message.txt", "utf8", function(err, data){
        console.log("READ!");
        console.log(err ? err : data);
    })
}

const appendFile = function(data){
    data = "\n" + data;
    fs.appendFile("message.txt", data, function(err){
        console.log(err ? err : "Appended Successfully");
    });
}

appendFile("1233452534");
