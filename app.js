const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200);
  res.send("Hello, Mr.Wu");
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});

module.exports = app;
