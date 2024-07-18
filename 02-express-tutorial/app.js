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

// const express = require("express");
// const path = require("path");
// const app = express();
// const index = path.resolve(__dirname, "./navbar-app/index.html");

// app.use(express.static("./public"));

// const { products } = require("./data");
// const { existsSync } = require("fs");

// app.get("/", (req, res) => {
//   res.sendFile(index);
// });

// app.get("/json", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((products) => {
//     const { id, name, image } = products;
//     return { id, name, image };
//   });
//   console.log(newProducts);
//   res.json(newProducts);
// });

// app.get("/api/products/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   const product = products.find((product) => product.id == id);
//   if (!product) {
//     res.status("404").send("404 product not found");
//   }
//   res.json(product);
// });

// app.get("/api/products/:id/reviews/:reviews", (req, res) => {
//   const reviews = req.params.reviews;

//   const values = products.find((items) => {
//     return items.reviews == reviews;
//   });
//   console.log(values);
//   if (!values) {
//     res.status("404").send("404 product not found");
//   }
//   res.send(values);
// });

// app.get("/api/v1/query", (req, res) => {
//   // const query = req.query;
//   // console.log(query);
//   // res.send("hello world");
//   const { search, limit } = req.query;
//   let sortedValue = [...products];
//   if (search) {
//     sortedValue = sortedValue.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
//   }
//   if (limit) {
//     sortedValue = sortedValue.slice(0, Number(limit));
//   }
//   if (sortedValue.length < 1) {
//     // res.status(200).send("<h1>no product match your search</h1>");
//     // the return is for "Cannot set headers after they are sent to the client"
//     return res.status(200).json({ success: true, data: [] });
//   }
//   res.json(sortedValue);
// });

// app.get("/about", (req, res) => {
//   console.log("about page ");
//   res.send("about page ");
// });

// app.all("*", (req, res) => {
//   console.log("404");
//   res.status(404).send("page not found  ");
// });

// app.listen(5000, () => {
//   console.log("server is running on port 5000");
// });

//-----------------------------------------------------------------------------------------------//
//middeware
// import express from "express";
// import morgan from "morgan";
// const app = express();

// import logger from "./logger.js";
// import authorize from "./authorized.js";

// // any path after the api will receive the logger
// // app.use("/api", logger);
// app.use(morgan("tiny"));
// // app.use(authorize, logger);
// app.get("/", (req, res) => {
//   res.send("home page");
// });

// app.get("/api", (req, res) => {
//   res.send("about page");
// });

// app.get("/shop", (req, res) => {
//   res.send("home page");
// });

// app.get("/api/items", [authorize, logger], (req, res) => {
//   res.send("about page");
// });
// app.listen(5000, () => {
//   console.log("server is running on port 5000");
// });

//-----------------------------------------------------------------------------------------------//
//HTTP Method
import express from "express";
const app = express();
import people from "./router/people.js";

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/users", people);

app.post("/login", (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (name) {
    return res.status(200).send("welcome");
  } else {
    res.status(401).send("please provide a name");
  }
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
