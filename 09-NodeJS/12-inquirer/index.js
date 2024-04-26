const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your first Name?",
        name: "firstName"
    },
    {
        type: "password",
        message: "Please Enter a password?",
        name: "password"
    },
    {
        type: "checkbox",
        message: "Select Favorite Car Color(s)",
        name: "carColors",
        choices: ["Red", "Black", "Yellow", "Blue", "Green"]
    },
    {
        type: "list",
        message : "Do you want to pick the Make?",
        name: "makeChoice",
        choices: ["Yes", "No"]
    },
    {
        type: "list",
        message : "What is your price Range?",
        name: "carPriceRange",
        choices: ["$5-1000", "$1001 - 5000", "$5001 - 10000", "$10,000+"]
    }
]).then(function(answers){
    if (answers.makeChoice === "Yes"){
        inquirer.prompt([
            {
                type: "list",
                message : "What Kind of Make do you want?",
                name: "makeOption",
                choices: ["Ford", "Mazda", "Toyota", "Volvo"]
            },
        ]).then(function(answersFollowup){

            
            // console.log(`Hi ${answers.firstName}, You want a ${answers.carColors} Car. You want to spend ${answers.carPriceRange}`);
            // console.log(answersFollowup)
            fs.appendFile("cars.txt", JSON.stringify(answers, null, "\t"), function(err){
                console.log(err ? err : "Success!")
            })
        })
    }
    
   
});
