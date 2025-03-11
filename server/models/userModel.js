import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    
  }
});

const user = mongoose.Model("user", userSchema);
