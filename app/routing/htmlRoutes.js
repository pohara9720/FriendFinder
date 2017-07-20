const path = require("path");
var friendArray = require("../data/friends");

module.exports = function(app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/list", (req, res) => {
        res.json(friendArray);
    });

};
