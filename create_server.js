var http= require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hey guys !');
});
server.listen(3000,'127.0.0.1');
console.log('listen the port');