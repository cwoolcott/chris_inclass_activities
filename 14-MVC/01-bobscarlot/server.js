const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection")
const routes = require("./controllers/cars_routes");
const SequelizeStore = require("connect-session-sequelize")(session.Store)

// Create an instance of the express app.
const app = express();

const PORT = process.env.PORT || 3001;



// Static Directory for css/js/images
app.use(express.static("public"));

//body parser for Posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessOptions = {
  secret: 'Super Secret Secret',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  store: new SequelizeStore({
    db:sequelize
  })
};

app.use(session(sessOptions))

const hbs = exphbs.create({
  helpers:{
    displayCarLink: function(year, make, model){
      if (parseInt(year)>2015){
        return `LINK TO A NEW CAR!`;
      }
      return `${year} ${make} ${model}!`
    },
    displayTodaysDate: function(){
      const todaysDate = new Date();
      return `${todaysDate.getMonth()}/${todaysDate.getDay()}/${todaysDate.getYear()}`
    },
  }
});

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
