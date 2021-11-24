var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello everyone welcome to capgemini, this is a sample demo project" }');
});

app.listen(process.env.PORT || 3000);
module.exports = app;
