'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const routes = require('./app/Http/routes');

let app = express();

// Middlewares
app.set('port', process.env.PORT || 8080);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', routes);

app.get('/', function(req, res) {
    console.log(req.cookies);
    res.json({
        'message': 'Hello world'
    });
});

app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
