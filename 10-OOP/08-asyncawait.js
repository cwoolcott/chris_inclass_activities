

var url = "https://www.omdbapi.com/?i=tt0108358&apikey=9fa6058b";

async function getMovie(url){
    var response = await fetch(url);
    console.log("RESPONSE HERE!");
    var data = await response.json()
    console.log("MOVIE PULLED!")
    console.log(data)
}

getMovie(url);

