const express = require('express');
const viewController = require('./../controllers/viewsController');

const router = express.Router();

router.get('/', viewController.getCheckoutView);
router.get('/success', viewController.getSuccessView);

module.exports = router;
