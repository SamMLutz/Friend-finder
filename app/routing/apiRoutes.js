var path = require("path")

var friendsData = require("../data/friends")

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        res.json(req.body);
        // console.log(req.body);
    })
    // console.log(req.body)
};
console.log(friendsData)
