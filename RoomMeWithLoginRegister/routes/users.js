const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register function
router.post('/register', (req, res) => {
  const { fname, lname, username, bio, email, password, password2, male, female, gaming, organized, party, Cooking, gym, anime, horror, comedy, mn, date} = req.body;
  let errors = [];

  if (!fname || !lname || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    //checks for any errors
    res.render('register', {
      errors,
      fname,
      lname,
      username,
      bio,
      email,
      password,
      password2
    });
  } else {
    //checks if email is already registered
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          fname,
          lname,
          username,
          bio,
          email,
          password,
          password2
        });
      } else {
        //makes user if not alreayd registed 
        const newUser = new User({
          fname,
          lname,
          username,
          bio,
          email,
          password,
          password2,
          male, 
          female, 
          gaming, 
          organized, 
          party, 
          Cooking, 
          gym, anime, 
          horror, 
          comedy, 
          mn, 
          date
        });
        //encrypts password and adds user
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
