const express = require("express");
const bcrypt = require("bcrypt");
//connection
const sequelize = require("./config/connection")

const User = require("./models/user");

const app = express();

//JSON Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3001;

app.post('/register', async (req, res)=>{
    //req.body.username
    //req.body.password

    await User.create(user)

    res.json("User Corrected!")
});


app.post('/login', async (req, res) => {
    const userData = await User.findOne({
        where: {
            username: req.body.username
        }
    });
    if (!userData){
        return res.json("Username or Password Isn't Correct");
    }

    //const validatePassword = await bcrypt.compare(req.body.password, userData.password);
    const validatePassword = await User.checkPassword(req.body.password);
    if (!validatePassword){
        res.json("Username or Password Isn't Correct");
        return;
    }

    return res.json('You are now logged in!');
});

sequelize.sync({force:false, alter:true}).then(() => {

    app.listen(PORT, () => "Listening ");

})


