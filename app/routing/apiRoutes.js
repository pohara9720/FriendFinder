var friendArray = require("../data/friends");
console.log(friendArray);


module.exports = function(app) {
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

    app.post("/list", (req, res) => {
        // console.log(req.body);
        var addedFriend = req.body;
        friendArray.push(addedFriend);
        res.json(addedFriend);
        console.log(friendArray);
    });

};
