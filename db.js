const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://amalashraf04:aamssanamm1234@cluster0.sc2qvv5.mongodb.net/admindash?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
  
  module.exports=mongoose