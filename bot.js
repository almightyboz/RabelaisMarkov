var Twit = require('twit');
var twitInfo = require('./config.js');

var twitter = new Twit(twitInfo);

function postTweet() {
  var r = Math.floor(Math.random()*100);

  var tweet = {
    status: "I am a test tweet, numero " + r + " #bot"
  }

  twitter.post('statuses/update', tweet , function(err, data, response) {
    if (err) {
      console.log("5OMeTh1nG weNt wR0ng");
    } else {
      console.log("Tweet sucessful");
    };
  });
}

// postTweet();
// second parameter is in miliseconds
// setInterval(postTweet, 1000*60*60*3);

