const router = require('express').Router();
// Data
const Car = require('../models/car');


router.get("/carbyid/:id", async (req, res) => {
    //const carId = req.params.id - 1;
     let carData = await Car.findByPk(req.params.id);

     if (carData){
      carData = carData.get({plain:true});
      return res.render("car", carData)
     }
     
     res.status(404).send("CAR NOT FOUND");
});

router.get(["/", "/allcars"], async (req, res) => {
    let carData = await Car.findAll();

    carData = carData.map((cars) => cars.get({plain:true}));
    console.log("carData", carData)
    res.render("allcars", {
        carsArray:carData,
        dealerName: "Bob's Car Lot"
    });
});

router.get("/newcar", (req, res) => {
    res.render("newcar")
})

router.post("/api/addcar", async (req, res) => {
    console.log(req.body)
    const carData = await Car.create(req.body);
    res.status(200).json(carData);
})



module.exports = router;