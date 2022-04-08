const http = require('http')

// Create server (callback function)
const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Here is About page')
    }
    else {
        res.end('We cant find a page you are looking for')
    }
})

// List to port 5000 on localhost
server.listen(5000)