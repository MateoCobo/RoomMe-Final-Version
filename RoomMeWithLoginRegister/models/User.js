const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  male: {
    type: String,      
  },
  female: {
    type: String, 
  },
  gaming: {
    type: String, 
  },
  organized: {
    type: String, 
  },
  party: {
    type: String, 
  },
  Cooking: {
    type: String, 
    },
  gym: {
    type: String, 
  },
  anime: {
    type: String, 
  },
  horror: {
    type: String, 
  },
  comedy: {
    type : String,
  },
  mn: {
    type: String, 
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
