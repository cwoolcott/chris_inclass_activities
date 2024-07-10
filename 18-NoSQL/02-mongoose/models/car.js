const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true,
    },
    make: {
        type: String,
        required: 'You need to have a make.',
        minlength: 1,
        maxlength: 280
    },
    model: {
        type: String,
        required: 'You need to have a model.',
        minlength: 1,
        maxlength: 280
    },
    sold: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
    },
    {
        toJSON:{
            virtuals:true
        },
        id: false
    }
);

carSchema.virtual('soldStatus')
.get(function(){
    return `This Car is ${this.sold ? 'sold' : 'not sold'}.`
})
.set(function(value){
    this.set({sold:value})
});

carSchema.virtual('total')
.get(function(){
    return this.price + (this.price * .06)
})

carSchema.methods.getSoldStatus = function(){
    console.log(`This Car is ${this.sold ? 'sold' : 'not sold'}.`)
}

const Car = mongoose.model('Car', carSchema);

Car.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      try {
        const insertedCars = await Car
          .insertMany([
            { make: 'Mazda', model: 'Rx-7', year:1994, price:30000, sold:false},
            { make: 'Mazda', model: 'Miata', year:2001, price:20000, sold:false},
            { make: 'Ford', model: 'Mustang', year:2024, price:40000, sold:false},
            { make: 'Ford', model: 'Fiesta', year:2000, price:5000, sold:false},
          ]);
        console.log('Inserted items:', insertedCars);
      } catch (insertedError) {
        console.log(insertedError);
      }
    }
  });

module.exports = Car;