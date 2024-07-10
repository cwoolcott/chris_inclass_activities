const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Sample route
app.get('/', (req, res) => {
  res.send('Bobs Cars!');
});

// Import routes
const carRoutes = require('./routes/car');
app.use('/api/car', carRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});