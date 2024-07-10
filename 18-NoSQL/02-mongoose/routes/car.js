const express = require('express');
const router = express.Router();
const {Car, Dealer} = require('../models/');

// Get all 
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find().select('-__v');
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/dealers', async (req, res) => {
  try {
    const dealers = await Dealer
    .find()
    .select('-__v')
    .populate({path: 'cars'})
    ;
    res.json(dealers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/dealerupdate/:dealer_id', async (req, res) => {
    const carId = req.body.carId;

    console.log(carId, req.params.dealer_id)
    const dealer = await Dealer.findOneAndUpdate(
      {_id: req.params.dealer_id},
      { $addToSet: {cars:carId}},
      {new:true}
    );

    res.json(dealer);
});

router.delete('/dealerupdate/:dealer_id/:car_id', async (req, res) => {
  const carId = req.params.car_id;
  const dealer_id = req.params.dealer_id;

  console.log(carId, req.params.dealer_id)

  //REmove Car
  // await Car.findOneAndDelete(
  //   {_id:carId}
  // )

  const dealer = await Dealer.findOneAndUpdate(
    {_id: dealer_id},
    { $pull: {cars:carId}},
    {new:true}
  );

  res.json(dealer);
})


router.get('/sold-totals', async (req, res) => {
  try {
    const result = await Car
      .aggregate([
        { $match: { sold: true } },
        {
          $group: {
            _id: null,
            sum_price: { $sum: '$price' },
            avg_price: { $avg: '$price' },
            max_price: { $max: '$price' },
            min_price: { $min: '$price' },
          },
        },
      ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
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
