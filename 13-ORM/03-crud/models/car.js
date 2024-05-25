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
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                isAlphanumeric: true
            }
        },
        model:{
            type: DataTypes.STRING,
            allowNull:false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
              len:[2,4]  
            }
        },
        sold: {
            type: DataTypes.BOOLEAN
        }
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


