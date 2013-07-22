var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer_contents = fs.readFileSync('index.html', 'utf-8');

var str_contents = buffer_contents.toString();

app.get('/', function(request, response) {
  response.send(str_contents);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
