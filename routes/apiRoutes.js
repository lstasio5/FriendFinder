//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// Sarah suggests using reduce function

var friendsData = require("../data/friendsData");
// ROUTING

module.exports = function(app) {
  // API GET Requests--------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  //Below code handles when user submits a form which submits data to server.
  //Submit should send new friend data to friendData array

  app.post("/api/friends", function(req, res) {
      console.log(friendsData.length)
      friendsData.push(req.body);
      res.json(true);
      console.log(friendsData.length)
      calcFriend;

  });}

   
    function calcFriend (answers) {
      var topFriend = undefined;
      var startDiff = 50;
      var totalDiff = 0;
      friendsData.forEach(friend => {
        for (var i = 0; i < friend.scores.length; i++) {
          totalDiff = totalDiff + Math.abs(answers[i] - friendsData[i]);
        }
        if(totalDiff < startDiff) {
          startDiff = totalDiff;
          topFriend = friend.name
        }
    });    
    return topFriend;
  }