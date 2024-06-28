const express = require("express");
const {MongoClient, ObjectId} = require("mongodb");

const app = express();
const PORT = 3001;

const connectionStringURI = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectionStringURI);

let db;
const dbName = 'shelterDB';

const seedData = [
    {
        petName:"mitzi",
        petType:"cat",
        appointments:[
            {
                date:"4/4/24",
                visit:"shot"
            },
            {
                date:"1/4/24",
                visit:"fleas"
            },
        ]
    },
    {
        petName:"Thurman",
        petType:"dog",
        appointments:[
            {
                date:"4/5/24",
                visit:"Checkup"
            },
            {
                date:"1/2/24",
                visit:"Checkup"
            },
        ]
    }
];

async function seedDBandConnect(){
    await client.connect();
    db = client.db(dbName);
    await db.collection('petCollection').deleteMany({});
    const response = await db.collection('petCollection').insertMany(seedData);
    console.log(response);

    app.listen(PORT, ()=>{
        console.log("server connected")
    });
    
}

app.get('/checkups', (req, res)=>{
    db.collection('petCollection')
    .find({'appointments.visit':{$eq:'Checkup'}})
    .toArray({})
    .then(results => res.json(results))
})

app.get('/:petId', (req, res)=>{
    const petId = new ObjectId(req.params.petId);
    //const petId = "ObjectID('667dfeccbfbf994ed9e5ff9b')"
    db.collection('petCollection')
    .find({_id:petId})
    .toArray({})
    .then(results => res.json(results))
})





app.get('/', (req, res)=>{
    db.collection('petCollection')
    .find({})
    .toArray({})
    .then(results => res.json(results))
})

app.delete('/:petId', (req, res)=>{
    const petId = new ObjectId(req.params.petId);
    //const petId = "ObjectID('667dfeccbfbf994ed9e5ff9b')"
    db.collection('petCollection')
    .deleteOne({_id:petId})
    .then(results => res.json(results))
})

seedDBandConnect();
