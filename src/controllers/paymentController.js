const gerencianetService = require('../services/gerencianetService');

const createPixPayment = async (req, res) => {
    try {
        const body = req.body;
        const paymentData = await gerencianetService.createPixPayment(body);
        res.status(201).json(paymentData);
    }catch (error) {
        res.status(500).json( { error: error.message } );
    }
};

const getPixPayment = async (req, res) => {
    try {
        
        const query = req.query;
        const paymentData = gerencianetService.consultPixPayment(query);

        paymentData.then(pd => {
            res.status(201).json(pd);
        });
        
    }catch (error) {
        res.status(500).json( { error: error.message } );
    }
};

module.exports = { 
    createPixPayment,
    getPixPayment
};