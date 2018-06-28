var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
    // secret: new Buffer('Ep1YarU6yin7KyL1frAGKrGkUvWdthzzlYM-1p6E8Gzx1t3_q-D6lo4uzsRHN0R9', 'base64'), 
    secret: new Buffer('Ep1YarU6yin7KyL1frAGKrGkUvWdthzzlYM-1p6E8Gzx1t3_q-D6lo4uzsRHN0R9', 'base64'), 
    audience: 'zcqZ1qraasMbDTheHRpwK1c6yDPBchIt'
});

app.get('/api/public', function(req, res) {
    res.json({message: "Hello from a public endpoint! You don't need to be authenticated"});
});

app.get('/api/private', authCheck, function(req, res) {
    res.json({message: "Hello from a private endpoint! You need to be authenticated"});
});

app.listen(3001);
console.log('Listening on http://localhost:3001');

