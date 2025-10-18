import express from "express";
import generateTokens from "./jwt-function.js";
const app = express();

const userData = "natnael sisay";
const tokens = generateTokens(userData);

app.get("/", (req, res) => {
  res.send(tokens);
});

app.listen(3000, () => {
  console.log("server running on port: 3000");
});
