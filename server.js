const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const whatsappRouts = require('./src/routes/whatsappRouts');
app.use('/', whatsappRouts);

const emailRouts = require('./src/routes/emailRouts');
app.use('/email', emailRouts);

const paymentRouts = require('./src/routes/paymentRouts');
app.use('/', paymentRouts);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});