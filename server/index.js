let express = require("express");
let app = express();
let db = require("./dbRouter");

const bodyParser = require("body-parser");

const cors = require("cors");

let port = 4566;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/db", db);

app.listen(port, () =>
  console.log(`app is listening to http://localhost:${port}/`)
);
