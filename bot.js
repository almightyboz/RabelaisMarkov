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

var useUpperCase = function(wordList) {
  var tempList = Object.keys(wordList).filter(function(word) {
    return word[0] >= "A" && word[0] <= "Z"
  })
  return tempList[~~(Math.random()*tempList.length)]
}

var setTweetLength = function(sentence) {
  var tweetLength = Math.floor(Math.random() * 138) + 100;
  return sentence.split("").length === tweetLength
}

var MarkovChain = require('markovchain')
  , fs = require('fs')
  , quotes = new MarkovChain(fs.readFileSync('./rabelais.txt', 'utf8'))

console.log(quotes.start(useUpperCase).end(setTweetLength).process())

// postTweet();
// second parameter is in miliseconds
// setInterval(postTweet, 1000*60*60*3);