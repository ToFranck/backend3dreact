const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteArtists = require('./router/artist');
var cors = require('cors');


mongoose.connect('mongodb+srv://Franck:Test@rav.bujvgdv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database!');
}).catch((error) => {
    console.log('Connection failed!');
});   

app.use(bodyParser.json());
app.use('/api/artists', RouteArtists);
app.use(cors());


module.exports = app;
