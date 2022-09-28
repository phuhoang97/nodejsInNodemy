const express = require("express");
const app = express();
const router1 = require("./apiRouter.js");

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/api/v1/", router1);
app.use("/admin/", router1);

app.listen(3000, () => {
  console.log(`Example app listening on port`);
});
