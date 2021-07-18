const http = require('http');
const dt = require('./module');
const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('demo.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        let myReadStream = fs.createReadStream(__dirname + '/demo.html','utf8')
        myReadStream.pipe(res)
    })
}).listen(5002); 