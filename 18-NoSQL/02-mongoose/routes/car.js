const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// Get all 
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find().select('-__v');
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one 
router.get('/:id', async (req, res) => {
  try {
    const cars = await Car.find({ _id: req.params.id }).select('-__v');
   
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new 
router.post('/', async (req, res) => {
  const car = new Car({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    sold: req.body.sold,
  });

  car.getSoldStatus();


  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.put('/:id', (req, res) => {
  //No Object ID needed


    Car.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbCarData) => {
        if (!dbCarData) {
          return res.status(404).json({ message: 'No car with this id!' });
        }
        res.json(dbCarData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})


module.exports = router;
