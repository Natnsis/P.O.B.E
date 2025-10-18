import express from "express";
import verify from "./role-based.middleware";

const app = express();

app.post("/hehe", varify, (req, res) => {
  res.send("hehehe");
});

app.listen(3000, () => {
  console.log("rbac server running...");
});
