const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")
class Car extends Model {};

Car.init(
    //fields
    {
        // car_id:{
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        make:{
            type: DataTypes.STRING
        },
        model:{
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.INTEGER
        },
    },
     //options
    {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        //underscored: true,
        modelName: "car",
    }
    
);
module.exports = Car;


