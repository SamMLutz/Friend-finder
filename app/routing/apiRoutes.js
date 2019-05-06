var path = require("path")

var friendsList = require("../data/friends")




// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        // res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        function getTotalValue(friend) {
            var total = 0;
        
            for (var i = 0; i < friend.scores.length; i++) {
                total = total + parseInt(friend.scores[i])
            }
        
            return total;
        }
        var totals = []
        var closestFriend;
        var scoreDifferences = []
        // friendsData.push(req.body);
        // res.json(req.body);
        // console.log(req.body);
        //  get the total score of the newFriend (req.body.scores)
        console.log(`req.body.scores: ${req.body.scores}`)
        //  loop friendsList get scores for other friends
        for (var i = 0; i < friendsList.length; i++) {
            var currentFriend = friendsList[i];

            var currentFriendsValue = getTotalValue(currentFriend);

            totals.push(currentFriendsValue);
        }

        console.log("totals: " + totals);

        for (var i = 0; i < totals.length; i++) {
            var currentScore = totals[i]
            var difference = Math.abs(getTotalValue(req.body) - currentScore)
            // console.log(difference)
            scoreDifferences.push(difference)
        }
        console.log("score differences: " + scoreDifferences)
        //  add new friend to friendsList
        // respond with the matched friend object
        var min = Math.min.apply(Math, scoreDifferences)
        console.log(min)

        for (var i = 0; i < friendsList.length; i++) {
            var currentFriend = friendsList[i];
            var currentFriendsValue = getTotalValue(currentFriend);
            if (Math.abs(getTotalValue(req.body) - currentFriendsValue) == min) {
                closestFriend = currentFriend;
                console.log("closest friend: " + JSON.stringify(closestFriend))
            }

        }
        res.json(closestFriend)
    })
    // console.log(req.body)
};
// console.log(friendsData)
