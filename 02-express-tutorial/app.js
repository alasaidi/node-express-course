// const http = require("http");
// const { readFileSync } = require("fs");
// // reading the file
// const homePage = readFileSync("./navbar-app/index.html");
// const stylePage = readFileSync("./navbar-app/styles.css");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   }

//   if (req.url == "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(stylePage);
//     res.end();
//   }

// } else if (req.url == "/about") {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write("<h1>about</h1>");
//   res.end();
// } else {
//   res.writeHead(404, { "content-type": "text/html" });
//   res.write("<h1>404 not found</h1>");
//   res.end();
// }
// });

// server.listen(5000);

//------------------------------------------------------------------------------------------------//

const express = require("express");
const path = require("path");
const app = express();
const index = path.resolve(__dirname, "./navbar-app/index.html");

app.use(express.static("./public"));

const { products } = require("./data");

app.get("/", (req, res) => {
  res.sendFile(index);
});

app.get("/json", (req, res) => {
  res.json(products);
});

app.get("/about", (req, res) => {
  console.log("about page ");
  res.send("about page ");
});

app.all("*", (req, res) => {
  console.log("404");
  res.status(404).send("page not found  ");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
