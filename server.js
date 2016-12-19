'use strict';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const env = require('node-env-file');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./app/Http/routes');

let app = express();

// Config
env(__dirname + '/.env');

// Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

// Middlewares
app.set('port', process.env.PORT || 8080);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// Api routes
app.use('/api', routes);

// Client
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

// Launch server
app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
