// HTTP Module with path including slash(/)

const http = require('http');
const { hostname } = require('os');
const port = 3002;

const server = http.createServer((req,res) => {
    const path = req.url;

    res.statusCode = 200
    res.setHeader('Content-Type','text/html');

    if(path === '/'){
        res.end('<h1>Welcome to Home Page</h1>')
    }
    else if (path === '/about'){
        res.end('<h1>This is the about page</h1>')
    }
    else if (path === '/contact'){
        res.end("<h1>Contact us here</h1>")
    }
    else{
        res.statusCode = 404
        res.end("<h1>404 Not found</h1>")
    }
})


server.listen(port, () => {
    console.log(`Server Running at Port http://localhost:${port}`)
})

server.on('error',(error) => {
    console.error("An error occured", error)
})