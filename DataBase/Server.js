// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const BrandName = require('./Object');

// Create an Express app
const app = express();

app.use(express.json());


// Connect to MongoDB using Mongoose
mongoose.connect("mongodb+srv://rajentry:Jesuslove@cluster0.herswoc.mongodb.net/Jesus");

// Check for successful MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.post('/addbrands', async (req, res) => {
  const { name } = req.body;
  try {
    const newData = new BrandName({ name });
    await newData.save();
    return res.json(await BrandName.find());
  } catch (err) {
    console.error(err.message);
    if (err instanceof SyntaxError) {
      res.status(400).json({ error: 'Invalid JSON format in request body' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});


// Handle GET requests for the root URL
app.get('/', (req, res) => {
  res.send('<h1>Hello MongoDB with Express!</h1>');
});
app.get('/getallbrands', async (req, res) => {
  try{
    const allData = await BrandName.find();
    return res.json(allData)
  }
  catch(err){
    console.log(err.message)
  }
});
app.get('/getallbrands/:id', async (req, res) => {
  try{
    const Data = await BrandName.findById(req.params.id);
    return res.json(Data)
  }
  catch(err){
    console.log(err.message)
  }
});

app.delete('/deletebrands/:id',async (req, res) => {
  try{
    await BrandName.findByIdAndDelete(req.params.Id);
    return res.json(await BrandName.find())
  }
  catch(err){
    console.log(err.message)
  }
});


// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
