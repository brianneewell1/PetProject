const router = require('express').Router();
const { Owner, Pet } = require('../models');
const withAuth = require('../utils/auth');



router.get('/pet/:id', async (req, res) => {
try {
const petData = await Pet.findByPk(req.params.id, {
  include: [
    {
      model: Owner,
      attributes: ['name'],
    },
  ],
});

const pet = petData.get({ plain: true });

res.render('pet', {
  ...pet,
  logged_in: req.session.logged_in
});
} catch (err) {
res.status(500).json(err);
}
});

// Use withAuth middleware to prevent access to route
//profile?
router.get('/profile', withAuth, async (req, res) => {
try {
// Find the logged in user based on the session ID
const userData = await User.findByPk(req.session.user_id, {
  attributes: { exclude: ['password'] },
  include: [{ model: Pet }],
});

const user = userData.get({ plain: true });

//profile?
res.render('profile', {
  ...user,
  logged_in: true
});
} catch (err) {
res.status(500).json(err);
}
});

//profile?
router.get('/login', (req, res) => {
// If the user is already logged in, redirect the request to another route
if (req.session.logged_in) {
res.redirect('/profile');
return;
}

res.render('login');
});

router.get('/', async (req, res) => {
    try {
      // Get all pets and JOIN with user data
      const petData = await Pet.findAll({
        include: [
          {
            model: Owner,
            //attributes: ['name'],
          },
        ],
      });

// Serialize data so the template can read it
// const pets = petData.map((pet) => pet.get({ plain: true }));
// console.log(pets)
const pets=[{id:1, name:STRING }]
// Pass serialized data and session flag into template
res.render('homepage', { 
  pets, 
  logged_in: req.session.logged_in 
});
} catch (err) {
res.status(500).json(err);
}
});

module.exports = router;