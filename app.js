const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/capacitacao-api-unimetrocamp', {
    useNewUrlParser: true
});
const app = express();

app.use(express.json());

app.use('/', require('./routes'));

module.exports = app;