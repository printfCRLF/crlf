var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
    secret: new Buffer('yVGiaWTiU6LHeJD80zrv_JpYle-WpqadaxBSrkbA83qVGcEutKFfR1ruhImHSX__', 'base64'), 
    audience: 'a4l404mFSI-yFGCHezGG8m-ISS33SGSd'
});

app.get('/api/public', function(req, res) {
    res.json({message: "Hello from a public endpoint! You don't need to be authenticated"});
});

app.get('/api/private', authCheck, function(req, res) {
    res.json({message: "Hello from a private endpoint! You need to be authenticated"});
});

app.listen(3001);
console.log('Listening on http://localhost:3001');

