const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("here is about page ");
  } else {
    res.end(`<h1> opps err 404</h1> <p> there's not such page</p>`);
  }
});
server.listen(5000);
