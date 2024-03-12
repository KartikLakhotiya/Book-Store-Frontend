const http = require('http');
const url = require('url');
const port = 3003

const server = http.createServer((req,res) => {
    const parseurl = url.parse(req.url , true);
    const path = parseurl.pathname;
    const path1 = path.replace(/^\/+|\/+$/g, '');

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if(path1 === ''){
        res.end('<h1>Welcome to Home Page</h1>')
    }
    else if (path1 === 'about'){
        res.end('<h1>This is the about page</h1>')
    }
    else if (path1 === 'contact'){
        res.end("<h1>Contact us here</h1>")
    }
    else{
        res.statusCode = 404
        res.end("<h1>404 Not found</h1>")
    }

})

server.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})