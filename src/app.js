// building the server for Fifa friendlies
// calling in all the required libraries

const path = require('path');
const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');


// establishing the port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// starting the app

// set up express
const app = express();

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
});