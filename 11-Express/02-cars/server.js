const express = require("express");
const fs = require("fs");
const carData = require("./data/cars.json")
const app = express();

app.use(express.static("public"));

//Body Parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 3001;

//html routes
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/cars.html")
});

app.get('/addcar', (req, res)=>{
    res.sendFile(__dirname + "/public/addcar.html")
});


//api routes
app.get('/api/cars', (req, res)=>{
    res.json(carData)
});

app.post('/api/cars', (req, res)=>{
   
    
    const newCarObj = {
        id: req.body.carId,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        sold: false
    }
    console.log(newCarObj);
    carData.push(newCarObj);
    res.json(`The ${req.body.make} was added!`);
    //console.log(`${req.method} was used!`)
});

app.put('/api/cars', (req, res)=>{
    res.json(`${req.method} was used!`);
    console.log(`${req.method} was used!`)
});

app.delete('/api/cars', (req, res)=>{
    res.json(`${req.method} was used and everything was deleted!`);
    console.log(`${req.method} was used and everything was deleted!`);
});

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});