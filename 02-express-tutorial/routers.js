import userController from "./controler.js";

import express from "express";
const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/users", userController.getallusers);

app.post("/api/users", userController.postuser);

app.put("/api/users/:id", userController.updateuser);

app.delete("/api/users/:id", userController.deleteuser);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
