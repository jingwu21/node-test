const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("<h1>Hello, Mr.Wu</h1>");
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
