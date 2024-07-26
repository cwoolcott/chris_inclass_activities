//JS Array of Objects Examples! Database Data will use Mongoose Methods

let { carsForSale } = require('../data/cars.js');

const resolvers = {
    Query: {
        allCars: () => {
            return carsForSale;
        },
        getCarById: (parent, args) => {
            const car = carsForSale.find(({ id }) => id == args.id);
            return car;
        },
        getSoldCars: (parent, args) => {
            const cars = carsForSale.filter(({ sold }) => sold == args.sold)
        }
    },
    Mutation: {
        addCar: (parent, args) => {
            const newCar = args;
            carsForSale.push(newCar);
            return newCar;
        },
        editCar: (parent, args) => {

            carIndex = carsForSale.findIndex(({ id }) => id == args.id);
            const newCar = args;
            carsForSale[carIndex] = newCar;
            
            return newCar;
        }
    }
}

module.exports = resolvers;