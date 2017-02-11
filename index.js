// Packages //
var http = require("http");
var conf = require("./conf.json");

// Configuration //
var hostname = "0.0.0.0";
var port = 13337;

// Functionality //
var server = http.createServer(function(req, res) {
    console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, world!");
});

server.listen(port, hostname, function() {
    console.log("Server listenining on: " + hostname + ":" + port + " ...");
    console.log(conf.bots[0]);
});
