const {Model, DataTypes} = require("sequelize");
const sequelize  = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    async checkPassword(password){
        const isValid = await bcrypt.compare(password, this.password)
    }
};

User.init(
    {
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[8]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async(userData) => {
                userData.password = await bcrypt.hash(userData.password, 10);
                return userData;
            }
        },
        sequelize,
        timestamps:true,
        modelName: 'user'
    }
);

module.exports = User;