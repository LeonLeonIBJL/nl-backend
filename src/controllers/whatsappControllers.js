const sendMessage = require('../services/sendMessages');

const sendMessageCtrl = async (req, res) => {

    try {

        let body = req.body;
        const messageData = await sendMessage.sendMessage(body);

        res.status(201).json(messageData);

    }catch (error) {
        res.status(500).json( { error: error.message } );
    }
};

module.exports = { 
    sendMessageCtrl
};