const axios = require('axios');
const path = require('path');
const fs = require('fs');
const https = require('https');

const cert = fs.readFileSync(
    path.resolve(__dirname, `../certs/${process.env.GN_CERT}`)
);

const agent = new https.Agent({
    pfx: cert,
    passphrase: ''
});

var credenciais = {
    client_id: `${process.env.GN_CLIENT_ID}`,
    client_secret: `${process.env.GN_SECRET_ID}`
};

var data = JSON.stringify({ grant_type: "client_credentials" });
var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

const getToken = async () => {

    const auth = Buffer.from(data_credentials).toString('base64');

    var config = {
        method: 'POST',
        url: `${process.env.GN_ENDPOINT}/oauth/token`,
        headers: {
            Authorization: "Basic " + auth,
            'Content-Type': 'application/json'
        },
        httpsAgent: agent,
        data: data
    };

    const response = await axios(config);

    return response;

};

const createPixPayment = async (body) => {

    try {

        const token = await getToken();
        const paymentData = body;
    
        const accessToken = token.data?.access_token;
        const typeToken = token.data?.token_type;
    
        const response = await axios.post(`${process.env.GN_ENDPOINT}/v2/cob`, paymentData, {
            httpsAgent: agent,
            headers: {
                Authorization: `${typeToken} ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
    
        return response.data;

    }catch(error) {
        console.log(error);
    }

};

const consultPixPayment = async (query) => {

    try {

        const token = await getToken();
        const paymentData = query;
    
        const accessToken = token.data?.access_token;
        const typeToken = token.data?.token_type;

        const response = await axios.get(`${process.env.GN_ENDPOINT}/v2/cob/${paymentData.txid}`, {

            httpsAgent: agent,
            headers: {
                Authorization: `${typeToken} ${accessToken}`,
                'Content-Type': 'application/json'
            }

        });
    
        return response.data;

    }catch(error) {
        console.log(error);
    }

};

module.exports = {
    createPixPayment,
    consultPixPayment
};