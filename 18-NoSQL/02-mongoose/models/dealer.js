// Define Mongoose
const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    }
  ]
});


const Dealer = mongoose.model('Dealer', dealerSchema);

// Will add data only if collection is empty to prevent duplicates
Dealer.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      try {
        const insertedDealers = await Dealer
          .insertMany([
            { name: 'Bobs Car Lot'},
            { name: 'Chris Clunkers'}
          ]);
        console.log('Inserted items:', insertedDealers);
      } catch (insertedError) {
        console.log(insertedError);
      }
    }
  });

module.exports = Dealer;
