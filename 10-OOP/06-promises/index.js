const inquirer = require("inquirer");
const {writeFile, readFile} = require("fs/promises");


function writeHTML(data){
    const html = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.Title}</title>
        </head>
        <body>
            <h1>${data.Title}</h1>
            <h2>${data.Plot}</h2>
            <img src="${data.Poster}"/>
        </body>
        </html>
    `;
    return html;
}

// inquirer.prompt({
//     type: 'input',
//     name: "movie",
//     message: "Please Enter a Movie:"
// })
// .then((res) => fetch(`https://www.omdbapi.com/?t=${res.movie}&apikey=9fa6058b`))
// .then((res)=> res.json())
// .then((data)=>{
//     return writeFile("./files/" + data.Title + ".html", writeHTML(data))
// })
// .then((fileWrite)=>{
//     console.log("Written Success", fileWrite)
// })
// .catch((err)=>{
//     console.log("err", err)
// })


async function getMovie(){

    try{
        const answer = await inquirer.prompt({
            type: 'input',
            name: "movie",
            message: "Please Enter a Movie:"
        });
        const response = await fetch(`https://www.omdbapi.com/?t=${answer.movie}&apikey=9fa6058b`);
        const data = await response.json()
        await writeFile("./files/" + data.Title + ".html", writeHTML(data))
    }
    catch(err){
        console.log(err)
    }
}

getMovie();


// inquirer.prompt({
//     type: 'input',
//     name: "movie",
//     message: "Please Enter a Movie:"
// }).then((res)=>{
//     fetch(`https://www.omdbapi.com/?t=${res.movie}&apikey=9fa6058b`)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//     })
// })