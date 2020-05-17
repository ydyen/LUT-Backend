//Server2.js is an example with a file system

const http = require("http");
// module to read files
const fs = require('fs')
const hostname = "localhost";
const port = 3001;

fs.readFile('index.html', (err, html) => {
    if(err){
        throw error
    }
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        // Header is html file
        res.setHeader("Content-type", "text/html");
        // reading html file
        res.write(html)
        res.end();
    });
    
    server.listen(port, hostname, (req, res) => {
        console.log("Server starting on port " + port)
    });
});
