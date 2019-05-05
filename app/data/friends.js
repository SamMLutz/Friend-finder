var friendsList = [
    {
        name: "Sam",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjLqPzZkf3hAhXsct8KHQINDTYQjRx6BAgBEAU&url=http%3A%2F%2Fwww.fanpop.com%2Fclubs%2Fleonardo-dicaprio%2Fimages%2F25975086%2Ftitle%2Frandom-photoshoot-photo&psig=AOvVaw0raUprdr7aIwAGvf0zVFnS&ust=1556896530528360",
        scores: [
            5,
            1,
            4,
            5,
            1,
            2,
            5,
            4,
            1,
            2,
            5
        ]
    },
    {
        name: "Jeaux Bleaux",
        photo: "http://townsquare.media/site/832/files/2017/06/Sam-Alex-headshot.jpg",
        scores: [
            3,
            4,
            1,
            1,
            3,
            4,
            2,
            3,
            4,
            2,
            5
        ]
    },
    {
        name: "Freddy Krueger",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Freddy_Krueger_%28Robert_Englund%29.jpg/220px-Freddy_Krueger_%28Robert_Englund%29.jpg",
        scores: [
            5,
            3,
            2,
            3,
            1,
            5,
            3,
            4,
            1,
            5,
            2
        ]
    }
]

module.exports = friendsList;

var newFriendTotal = 29;

function getTotalValue(friend) {
    var total = 0;

    for (var i = 0; i < friend.scores.length; i++) {
        total = total + parseInt(friend.scores[i])
    }

    return total;
}

var totals = []
var closestFriend;
var otherFriends = []
var scoreDifference = []

for (var i = 0; i < friendsList.length; i++) {
    var currentFriend = friendsList[i];
    
    var currentFriendsValue = getTotalValue(currentFriend);

    totals.push(currentFriendsValue);
}

console.log(totals);

// loop thru totals and check NewFriendTotal against scores

for (var i = 0; i <totals.length; i++) {
    var currentScore = totals[i]
    var difference = Math.abs(newFriendTotal - currentScore)
    // console.log(difference)
    scoreDifference.push(difference)
}
console.log(scoreDifference)
// scoreDifference.sort()
scoreDifference.sort(function(a, b){return b - a});
// console.log(difference)

var min = Math.min.apply(Math, scoreDifference)
console.log(min)

for (var i =0; i < friendsList.length; i++) {
    var currentFriend = friendsList[i];
    var currentFriendsValue = getTotalValue(currentFriend);
    if (Math.abs(newFriendTotal - currentFriendsValue) == min) {
        closestFriend = currentFriend;
        console.log(closestFriend)
    } 

}