'use strict';

const express = require('express');
const routes = require('./app/Http/routes');

let app = express();

// Middlewares
app.set('port', process.env.PORT || 8080);

// Routes
app.use('/api', routes);

app.get('/', function(req, res) {
    res.json({
        'message': 'Hello world'
    });
});

app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
