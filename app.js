var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var accountSid = 'AC23d38d64f113cbd57fe69b744ae37c46';
var twilio = require('twilio');
var qs = require('querystring');
var authToken = '4767a1a13814d3e80b13773824e79f44';
var client = require('twilio')(accountSid, authToken);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));

var server = app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


client.messages.create({
    body: "Thank you for signing up for TextBER!",
    to: "+14083869581",
    from: "+16505420611"
}, function(err, message) {
    process.stdout.write(message.sid);
});


app.post('/processtext', function(req,res) {
    console.log(req);    
  });
