var http = require("http");
var fs = require("fs");


// READABLE STREAMS 
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// myReadStream.on("data", function(chunk){
//     console.log('new chunk received:')
//     console.log(chunk);
// })


// WRITABLE STREAMS 
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
});