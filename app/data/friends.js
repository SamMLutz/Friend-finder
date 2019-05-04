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
    }
]

module.exports = friendsList;

var firstFriendTotal = 29;

function getTotalValue(friend) {
    var total = 0;

    for (var i = 0; i < friend.scores.length; i++) {
        total = total + parseInt(friend.scores[i])
    }

    return total;
}

var totals = []

for (var i = 0; i < friendsList.length; i++) {
    var currentFriend = friendsList[i];
    
    var currentFriendsValue = getTotalValue(currentFriend);

    totals.push(currentFriendsValue);
}

console.log(totals);
