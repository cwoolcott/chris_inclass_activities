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
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
});

carSchema.methods.getSoldStatus = function(){
    console.log(`This Car is ${this.sold ? 'sold' : 'not sold'}.`)
}

const Car = mongoose.model('Car', carSchema);

// **Should be in route**
// const car = new Car({
//     year: 1998,
//     make: sdf,
//     model: sfd,
//     sold: true,
//   });

//   car.getSoldStatus();


module.exports = Car;