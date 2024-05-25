const express = require("express");
//connection
const sequelize = require("./config/connection")


const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync(false).then(() => {


    app.listen(PORT, () => "Listening ");


})


