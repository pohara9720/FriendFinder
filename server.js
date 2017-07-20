const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const $ = require("jquery")
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(port, () => {
    console.log("App listening on PORT " + port);
});