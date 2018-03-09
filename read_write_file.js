var fs =require('fs');
/*var readme= fs.readFileSync('readMe.txt','utf8');
console.log(readme)

fs.writeFileSync('writeMe.txt',readme);*/

fs.readFileSync('readMe.txt','utf8',function (err,data) {
    console.log(data);
});

fs.readFileSync('readMe.txt','utf8',function (err,data) {
    fs.writeFile('writeMe.txt',data)
});

