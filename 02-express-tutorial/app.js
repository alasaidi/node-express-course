const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello word");
    console.log(req);
  }
});

server.listen(5000);
