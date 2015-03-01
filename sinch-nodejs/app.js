var express = require('express');
var app = express();

var sinchAuth = require('sinch-auth');
var sinchSms = require('sinch-messaging');
var auth = sinchAuth("fd322c15-33cd-4486-8b30-d18a9d914603", "0nvKBD1dLUW3Tb4oW3SdXw==");
var smsResult = '';

app.get('/', function (req, res) {
  var phoneNumber = req.query.tophone; //"+14046109974";
  var smsText = req.query.smstext; //"Hello world!";
  smsResult = sinchSms.sendMessage(phoneNumber, smsText);
  console.log('SMS Sent://%s:%s', phoneNumber, smsText);
  res.send('Thanks for using Sinch to send text to!' + phoneNumber);
})

var server = app.listen(process.env.PORT, function () {
  
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Example app listening at http://%s:%s', host, port);
  
})