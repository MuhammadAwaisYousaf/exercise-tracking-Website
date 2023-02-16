const mongoose=require("mongoose");

const addexcercise = mongoose.Schema({
    activity: { type: String, required: true },
    date: { type: Date, required: true },
    Description: { type: String, required: true },
    Duration: { type: Number, required: true },
    email: { type: String, required: true },
    
  });
  module.exports = mongoose.model("addexcercise", addexcercise);
  
  