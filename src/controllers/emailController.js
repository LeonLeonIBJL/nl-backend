const emailService = require('../services/emailService');

const sendEmailConfirmation = async (req, res) => {
    try {
        const body = req.body;
        const emailData = await emailService.sendEmailConfirmation(body);
        res.status(201).json(emailData);
    }catch (error) {
        res.status(500).json( { error: error.message } );
    }
};

const sendEmailPrize = async (req, res) => {
    try {
        const body = req.body;
        const emailData = await emailService.sendEmailPrize(body);
        res.status(201).json(emailData);
    }catch (error) {
        res.status(500).json( { error: error.message } );
    }
};

module.exports = { 
    sendEmailConfirmation,
    sendEmailPrize
};