const express = require('express');
const app = express();
require('dotenv').config({path: './.env'});
require('./db/conn');

// Middleware


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello World From Server");
});

app.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`);
});