const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>hello world</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(5000);
