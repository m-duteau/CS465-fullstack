const express = require('express'); // Express app
const router = express.Router();    // Router logic
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"],
});

// Import the controllers to route
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// define route for authentication
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

// define route for trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(auth, tripsController.tripsAddTrip); // POST Method adds a Trip

// GET Method routes tripsFindByCode - param req'd
// PUT Method routes tripsUpdateTrip - param req'd
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);
    
module.exports = router;