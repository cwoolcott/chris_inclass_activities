const sequelize = require("./config/connection")
const Car = require("./models/car")

const carSeedData = [
    {
        make:'Mazda',
        model:'Rx-7',
        year: 1993
    },
    {
        make:'Toyota',
        model:'Celica',
        year: 1995
    },
    {
        make:'Ford',
        model:'Probe',
        year: 1995
    },
    {
        make:'BMW',
        model:'Mini Cooper',
        year: 2001
    },
    {
        make:'Fiat',
        model:'Spyder',
        year: 1973
    },
];

const seedCar = async () => {
    await Car.bulkCreate(carSeedData);
    process.exit(0);
};

seedCar();
