const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://capacitacao-api-unimetrocamp:tasks@capacitacao-api-unimetrocamp-ty6jg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
const app = express();


app.use('/', require('./routes'));

module.exports = app;