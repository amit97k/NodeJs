var http= require('http');
var fs= require('fs');

var server = http.createServer(function (req,res) {
    console.log(req.url);//to see the url on which we are working
    res.writeHead(200,{'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
    myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('listen the port');