const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Render Server API Deploy"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
