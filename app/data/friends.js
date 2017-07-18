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

var friendArray = [{
    name: "Sydney",
    photo: "http://popcrush.com/files/2013/05/black-and-white-girl-photography-smile-Favim.com-3423081.jpg",
    scores: [
        "5",
        "3",
        "2",
        "1",
        "5",
        "3",
        "4",
        "4",
        "5",
        "2"
    ]
}, {
    name: "Patrick",
    photo: "https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    scores: [
        "4",
        "3",
        "1",
        "5",
        "4",
        "5",
        "5",
        "4",
        "2",
        "2"
    ]
}, {
    name: "Ryan",
    photo: "https://thumbs.dreamstime.com/z/funny-looking-young-man-wearing-headband-sunglasses-29781972.jpg",
    scores: [
        "3",
        "3",
        "2",
        "4",
        "5",
        "3",
        "2",
        "3",
        "1",
        "4"
    ]
}, {
    name: "Drea",
    photo: "https://s4.favim.com/orig/50/girl-photography-smile-Favim.com-457249.jpg",
    scores: [
        "4",
        "2",
        "1",
        "5",
        "5",
        "3",
        "2",
        "1",
        "1",
        "3"
    ]
}, {
    name: "Matt",
    photo: "http://newskyproductions.com/wp-content/uploads/2014/06/MG_2988-700.jpg",
    scores: [
        "2",
        "3",
        "5",
        "5",
        "4",
        "4",
        "2",
        "2",
        "1",
        "1"
    ]
}, {
    name: "Kailee",
    photo: "http://www.newhdwallpapers.in/wp-content/uploads/2015/10/Smile-Model-Girls-Photography.jpg",
    scores: [
        "4",
        "3",
        "1",
        "3",
        "2",
        "4",
        "5",
        "5",
        "1",
        "2"
    ]
}, {
    name: "Kylie",
    photo: "https://s-media-cache-ak0.pinimg.com/originals/42/2a/06/422a06911213153e475cac830cd20673.jpg",
    scores: [
        "3",
        "2",
        "1",
        "1",
        "5",
        "4",
        "3",
        "2",
        "2",
        "2"
    ]
}];


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/list", (req, res) => {
    res.json(friendArray);
})

app.post("/list", (req, res) => {
    // console.log(req.body);
    var addedFriend = req.body;
    friendArray.push(addedFriend);
    res.json(addedFriend);
});

app.post("/survey", (req, res) => {
    var userArray = req.body;


    var diffArray = [];
    for (var i = 0; i < friendArray.length; i++) {
        var diff = 0;

        for (var j = 0; j < userArray.scores.length; j++) {
            var difference = Math.abs(userArray.scores[j] - friendArray[i].scores[j]);
            diff += difference;
        }
        diffArray.push(diff);
        console.log(diffArray);
    }
    // console.log("difference array " + diffArray);
    // var minimum = Math.min(parseFloat(diffArray));
    // console.log("user scores " + userArray.scores);
    // console.log("smallest: " + minimum);
    var minimum = diffArray[0];

    for (var x = 1; x < diffArray.length; x++) {
        if (diffArray[x] < minimum) {
            minimum = diffArray[x];
        }
    }

    console.log("smallest: " + minimum);

    var matchPosition = diffArray.indexOf(minimum);
    console.log("matchIndex  " + matchPosition);
    var match = friendArray[matchPosition];
    console.log(match);
    res.send(match);
    
    

});

app.listen(port, () => {
    console.log("App listening on PORT " + port);
});
