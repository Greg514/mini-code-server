const  http = require('http');
const fs = require('fs');
const path = require('path');


const PORT = 8080;

console.log(__dirname);


const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'pages/home.html'), (err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        })
    }
    else if(req.url === '/about') {
        
        fs.readFile(path.join(__dirname, 'pages/about.html'), (err,data) =>{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        })
    }
    else if ( req.url === '/api'){
        fs.readFile (path.join(__dirname, 'data/users.json'), (err,data_)=>{
            res.writeHead(200,{'Content-Type': 'application/json'});
            res.end(data_);
        })
    }
   
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');  
        res.end();
    }


});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});