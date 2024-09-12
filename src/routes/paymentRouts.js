const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/pix', paymentController.createPixPayment);

router.get('/pix', paymentController.getPixPayment);

module.exports = router;