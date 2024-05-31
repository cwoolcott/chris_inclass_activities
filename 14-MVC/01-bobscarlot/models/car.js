const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model { };

Car.init(
    {
        make: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        yearMade: {
            type: DataTypes.INTEGER
        },
        sold: {
            type: DataTypes.BOOLEAN
        },
        price: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'carsonlot'
    }
);

module.exports = Car;

