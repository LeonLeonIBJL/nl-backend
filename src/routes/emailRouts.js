const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/confirm', emailController.sendEmailConfirmation);

module.exports = router;