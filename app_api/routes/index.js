const express = require('express'); // Express app
const router = express.Router();    // Router logic

// Import the controllers to route
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(tripsController.tripsAddTrip); // POST Method adds a Trip

// GET Method routes tripsFindByCode - param req'd
// PUT Method routes tripsUpdateTrip - param req'd
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);
    
module.exports = router;