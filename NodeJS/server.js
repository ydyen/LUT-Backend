//This is a core module that is built-in
const http = require("http");

//Hostname (localhost) or ip address
const hostname = "127.0.0.1";

//Port number
const port = 3000;

// server
const server = http.createServer((req, res) => {
    //respone is ok
    res.statusCode = 200;

    //header 
    res.setHeader('Content-type', 'text/plain');

    //ouput
    res.end("Hello World!");
});

// run node server.js "server started on port 3000"
server.listen(port, hostname, () => {
    console.log("server started on port " + port);
})