const express = require("express");
//connection
const sequelize = require("./config/connection")

const Car = require("./models/car");

const app = express();

//JSON Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3001;

// app.get('/mazda', (req, res) =>{

//     Car.findAll({
//         order: ['year', 'make', 'model'],
//         where: {
//             make:'Mazda'
//         },
//         attributes:{
//             include:['id', 'createdAt', 'updatedAt']
//         }
//     }).then((carData)=>{
//         res.json(carData)
   
//     })

// });

app.get('/mazda',  async (req, res) => {
  
    const allTheMazdas = await Car.findAll({
        order: ['year', 'make', 'model'],
        where: {
            make:'Mazda'
        },
        attributes:{
            include:['id', 'createdAt', 'updatedAt']
        }
    });

    res.json(allTheMazdas)
});

app.get('/', async (req, res) =>{
    const carData = await Car.findAll({
        order: ['year', 'make', 'model'],
        attributes:{
            exclude:['id', 'createdAt', 'updatedAt']
        }
    });

    res.json(carData)
});

app.get('/:id', async (req, res) =>{
    try {
        const carData = await Car.findByPk(req.params.id);
        if (!carData){
            res.json("Car Not Found!")
        }
        res.json(carData)
    }
    catch(err){
        res.status(500).json(err)
    }
});


app.post('/', async (req, res) => {
    // req.body = {
    //     make:"Hummer",
    //     model:"EV",
    //     year:2023
    // }
    try {
        const newCar = await Car.create(req.body)
        res.json(newCar);
    }
    catch(err){
        res.json(err.errors[0].message)
    }
  });

  

//localhost:3001/6
app.delete('/:id', async (req, res) => {
    await Car.destroy({
        where:{
            id:req.params.id
        }
    })
    res.json("Car Deleted!")
});

//Update
app.put('/:id', (req, res)=>{
        Car.update({
            make: req.body.make,
            model: req.body.model,
            year: req.body.year
        },
        {
            where:{
                id:req.params.id
            }
        }
        )
        .then((updatedCar) => res.json(updatedCar))
        .catch((err) => res.json(err))

});


sequelize.sync({force:false, alter:true}).then(() => {

    app.listen(PORT, () => "Listening ");

})


