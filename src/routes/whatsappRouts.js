const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/whatsappControllers');

router.post('/welcome', whatsappController.sendMessageCtrl);

module.exports = router;