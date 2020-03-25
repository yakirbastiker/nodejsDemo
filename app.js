var http = require("http");
var fs = require("fs");

// var server = http.createServer(function(req, res) {
//     res.write("hello")
//     res.end();
// }).listen(3000);

// var server = http.createServer(function(req, res) {
//     console.log(`request was made: ${req.url}`)
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end("yakir")
// });


//SERVING HTML PAGE

// var server = http.createServer(function(req, res) {
//     console.log(`request was made: ${req.url}`)
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);

// });


//SERVING json data

var server = http.createServer(function(req, res) {
    console.log(`request was made: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'yakir',
        job: 'developer',
        age: 29
    };

    res.end(JSON.stringify(myObj))
});


server.listen(3000, '127.0.0.1');
console.log("server running")