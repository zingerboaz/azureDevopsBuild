var express = require('express');
 
var app = express();
var calc = 2;
app.get('/', function (req, res) {
 res.send('Welcome To The my Application ! Thanks for boazZinger :-)' + "</br>" + 'The result of 1+1 is: ' + calc);
});
app.listen(process.env.PORT || 3000);
 
module.exports = app;
