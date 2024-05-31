const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection")
const routes = require("./controllers/cars_routes");

// Create an instance of the express app.
const app = express();

const PORT = process.env.PORT || 3001;



// Static Directory for css/js/images
app.use(express.static("public"));

//body parser for Posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({});

//Sets handlebars configurations
app.engine("handlebars", hbs.engine);
//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");

app.use(routes);

// Start our server so that it can begin listening to client requests.

sequelize.sync({force:false}).then(()=>{

  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
});
