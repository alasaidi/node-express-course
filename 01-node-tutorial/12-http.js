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
// http
//   .createServer((req, res) => {
//     const data = { name: "John", age: 30 };

//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(data));
//   })
//   .listen(3000);

// const server = http.createServer((req, res) => {
// Set headers
//   res.setHeader("Content-Type", "text/html");
//   res.setHeader("X-Custom-Header", "Hello!");

// Some processing might happen here

// Set another header
//   res.setHeader("Cache-Control", "max-age=3600");

// End the response and send content
//   res.end("<h1>Hello, World!</h1>");

// This would throw an error because the response is already sent
// res.setHeader('X-Late-Header', 'Too late!');
// });

// server.listen(3000);
