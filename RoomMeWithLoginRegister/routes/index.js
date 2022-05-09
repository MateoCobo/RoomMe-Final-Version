const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User = require('../models/User');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

//Profile page
router.get('/profile', ensureAuthenticated, (req, res) =>
res.render('profile', {
  user: req.user
})
);

//Roommate page
router.get('/roommates', ensureAuthenticated, (req, res) => {
  
  User.find( )
  .then((result) => {
    res.render('roommates', { users: result})
  })
  .catch((err) => {
    console.log(err)
  })
});
   

//Female Roommate page
router.get('/femaleroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('femaleroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Male Roommate page
router.get('/maleroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('maleroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Gaming Roommate page
router.get('/gamingroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('gamingroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Organized Roommate page
router.get('/organizedroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('organizedroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Party Roommate page
router.get('/partyroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('partyroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Cooking Roommate page
router.get('/cookingroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('cookingroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Gym Roommate page
router.get('/gymroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('gymroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Anime Roommate page
router.get('/animeroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('animeroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Horror Roommate page
router.get('/horrorroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('horrorroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Comedy Roommate page
router.get('/comedyroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('comedyroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//MovieNight Roommate page
router.get('/movienightroommates', ensureAuthenticated, (req, res) =>
  User.find()
    .then((result) => {
      res.render('movienightroommates', { users: result, input: req.body})
    })
    .catch((err) => {
      console.log(err)
    })  
);

//Different room pages
 router.get('/adams', ensureAuthenticated, (req, res) => {
  res.render('Adams');
 });

 router.get('/amherst', ensureAuthenticated, (req, res) => {
  res.render('Amherst');
 });

 router.get('/angelcabrera', ensureAuthenticated, (req, res) => {
  res.render('AngelCabrera');
 });

 router.get('/blueridge', ensureAuthenticated, (req, res) => {
  res.render('BlueRidge');
 });

 router.get('/brunswick', ensureAuthenticated, (req, res) => {
  res.render('Brunswick');
 });

 router.get('/carroll', ensureAuthenticated, (req, res) => {
  res.render('Carroll');
 });

 router.get('/commonwealth', ensureAuthenticated, (req, res) => {
  res.render('Commonwealth');
 });

 router.get('/dickenson', ensureAuthenticated, (req, res) => {
  res.render('Dickenson');
 });

 router.get('/dominion', ensureAuthenticated, (req, res) => {
  res.render('Dominion');
 });

 router.get('/easternshore', ensureAuthenticated, (req, res) => {
  res.render('EasternShore');
 });

 router.get('/essex', ensureAuthenticated, (req, res) => {
  res.render('Essex');
 });

 router.get('/franklin', ensureAuthenticated, (req, res) => {
  res.render('Franklin');
 });

 router.get('/grayson', ensureAuthenticated, (req, res) => {
  res.render('Grayson');
 });

 router.get('/hamptonroads', ensureAuthenticated, (req, res) => {
  res.render('HamptonRoads');
 });

 router.get('/harrison', ensureAuthenticated, (req, res) => {
  res.render('Harrison');
 });

 router.get('/jackson', ensureAuthenticated, (req, res) => {
  res.render('Jackson');
 });

 router.get('/jefferson', ensureAuthenticated, (req, res) => {
  res.render('Jefferson');
 });

 router.get('/kennedy', ensureAuthenticated, (req, res) => {
  res.render('Kennedy');
 });

 router.get('/libertysquare', ensureAuthenticated, (req, res) => {
  res.render('LibertySquare');
 });

 router.get('/lincoln', ensureAuthenticated, (req, res) => {
  res.render('lincoln');
 });

 router.get('/madison', ensureAuthenticated, (req, res) => {
  res.render('Madison');
 });

 router.get('/monroe', ensureAuthenticated, (req, res) => {
  res.render('Monroe');
 });

 router.get('/northernneck', ensureAuthenticated, (req, res) => {
  res.render('NorthernNeck');
 });

 router.get('/piedmont', ensureAuthenticated, (req, res) => {
  res.render('Piedmont');
 });

 router.get('/potomacheights', ensureAuthenticated, (req, res) => {
  res.render('potomacHeights');
 });

 router.get('/rogers', ensureAuthenticated, (req, res) => {
  res.render('Rogers');
 });

 router.get('/roosevelt', ensureAuthenticated, (req, res) => {
  res.render('Roosevelt');
 });
 
 router.get('/sandbridge', ensureAuthenticated, (req, res) => {
  res.render('Sandbridge');
 });
 
 router.get('/taylor', ensureAuthenticated, (req, res) => {
  res.render('Taylor');
 });
 
 router.get('/tidewater', ensureAuthenticated, (req, res) => {
  res.render('Tidewater');
 });

 router.get('/townhouses', ensureAuthenticated, (req, res) => {
  res.render('Townhouses');
 });

 router.get('/truman', ensureAuthenticated, (req, res) => {
  res.render('Truman');
 });

 router.get('/washington', ensureAuthenticated, (req, res) => {
  res.render('Washington');
 });

 router.get('/whitetop', ensureAuthenticated, (req, res) => {
  res.render('Whitetop');
 });

 router.get('/wilson', ensureAuthenticated, (req, res) => {
  res.render('Wilson');
 });

module.exports = router;
