var fs= require('fs');
var http= require('http');
    var server = http.createServer(function (req,res) {
    console.log(req.url);//to see the url on which we are working
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myObj={
        name:'rahul',
        job:'engineer',
        age:21
    };
    res.end(JSON.stringify(myObj));
});
server.listen(3000,'127.0.0.1');
console.log('listen the port');