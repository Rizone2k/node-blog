const express = require("express");
const app = express();
const port = 3000;

const a = 12;
const A = 12;

const b = a + A;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
