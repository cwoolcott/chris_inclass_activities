const express = require("express");
//connection
const sequelize = require("./config/connection")

const Car = require("./models/car");

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({force:true}).then(() => {

    app.listen(PORT, () => "Listening ");

})


