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
    console.log(req.body);
    var addedFriend = req.body;
    friendArray.push(addedFriend);
    res.json(addedFriend);
});

app.post("/survey", (req, res) => {
    console.log(req.body);
    var userArray = req.body;
    console.log(userArray);
    var totalDifference = 0;

// if the arrays are always the same length, you only need to iterate over one of them
for (var i = 0; i < userArray.scores.length; i++) {
    // subtract larger from smaller and add to totalDiff
    if (userArray.scores.length[i] > friendArray[i]) {
        totalDifference += userArray.scores[i] - friendArray[i];
    } else {
        totalDifference += friendArray[i] - userArray.scores[i];   
    }
}
console.log("totalDiff:", totalDifference);
//     for (i = 0; i < userArray.scores.length; i++) {
//         diffArray = [];

//         for (i = 0; i < friendArray.length; i++) {

//             var difference = userArray.scores[i] - friendArray[i];
//             diffArray.push(difference);


//         }
//     }
//     console.log(diffArray);

//     function getSum(total, num) {
//         return total + num;
//     }
//     var result = diffArray.reduce(getSum)
//     console.log(result);
});


app.listen(port, () => {
    console.log("App listening on PORT " + port);
});
