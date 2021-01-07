const express = require('express');
const checkoutController = require('./../controllers/checkoutController');

const router = express.Router();

router.post('/', checkoutController.getCheckoutSession);

module.exports = router;