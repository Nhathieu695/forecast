const express = require('express')
const app = express()
const port = 8080
require('dotenv').config()
const mongoose = require('mongoose');
const router = require('./router/router');
const cors = require('cors')

const corsOptions = {
    origin: ["http://localhost:8080"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type',
        'Origin',
        'X-Requested-With',
        'Accept',
        'x-client-key',
        'x-client-token',
        'x-client-secret',
        'Authorization'
    ],
};

app.use(cors(corsOptions));
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const mongoURI = process.env.MONGODB_CONNECTION;
(async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})();