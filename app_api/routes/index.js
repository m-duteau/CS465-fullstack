const express = require('express'); // Express app
const router = express.Router();    // Router logic

// Import the controllers to route
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList); // GET Method routes tripsList

//GET Method routes tripsFindByCode - param req'd
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);
    
module.exports = router;