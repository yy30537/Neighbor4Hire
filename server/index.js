const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Neighbor for Hire API');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

