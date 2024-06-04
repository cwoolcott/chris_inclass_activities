const router = require('express').Router();
// Data
const Car = require('../models/car');
const loggedIn = require("../utils/loggedin");

router.get("/carbyid/:id", loggedIn, async (req, res) => {
    //const carId = req.params.id - 1;
     let carData = await Car.findByPk(req.params.id);

     if (carData){
      carData = carData.get({plain:true});
      return res.render("car", carData)
     }
     
     res.status(404).send("CAR NOT FOUND");
});

router.get(["/", "/allcars"], loggedIn,  async (req, res) => {
    let carData = await Car.findAll();
    console.log("req.session.firstName", req.session.firstName)

    carData = carData.map((cars) => cars.get({plain:true}));

    res.render("allcars", {
        firstName: req.session.firstName,
        carsArray:carData,
        dealerName: "Bob's Car Lot"
    });
});


router.get("/register", async (req, res) => {

    res.render("signin");
});

router.post("/api/personalize", async (req, res) =>{
    console.log("req.body", req.body)
    const firstName = req.body.firstName;


    req.session.save(()=>{
        req.session.firstName = firstName;
        res.json({"Added":firstName});
    });

    
})

router.get("/newcar", (req, res) => {
    res.render("newcar")
})

router.post("/api/addcar", async (req, res) => {
    console.log(req.body)
    const carData = await Car.create(req.body);
    res.status(200).json(carData);
})



module.exports = router;