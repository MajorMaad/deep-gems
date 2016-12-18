'use strict';

const express = require('express');

let app = express();

// Middlewares
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.json({
        'message': 'Hello world'
    });
});

app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
