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
    return word[0] >= "A" && word[0] <= "Z";
  })
  return tempList[~~(Math.random()*tempList.length)];
}

var findEndWord = function(wordList) {
  var tempList = Object.keys(wordList).filter(function(word) {
    return word[word.length - 1] === "." ;
  })
  var whatever =  tempList[~~(Math.random()*tempList.length)];
  console.log(whatever);
  return whatever;
}

var setTweetLength = function(sentence) {
  // var tweetLength = Math.floor(Math.random() * 120-101) + 100;
  sentence.split("").length >= 120;
}

var MarkovChain = require('markovchain')
  , fs = require('fs')
  , quotes = new MarkovChain(fs.readFileSync('./rabelais.txt', 'utf8'))
// end the sentence if, after 4 words, the next word is an end word
// or end after
// will continue to churn out sentences, only end it when it finds one that returns a truthy on the end
console.log(quotes.start(useUpperCase).end(findEndWord).process())

// postTweet();
// second parameter is in miliseconds
// setInterval(postTweet, 1000*60*60*3);