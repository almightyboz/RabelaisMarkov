var Twit = require('twit');
var twitInfo = [CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET];

//use when testing locally
// var twitInfo = require('./config.js')

var twitter = new Twit(twitInfo);

var useUpperCase = function(wordList) {
  var tempList = Object.keys(wordList).filter(function(word) {
    return word[0] >= "A" && word[0] <= "Z";
  });
  return tempList[~~(Math.random()*tempList.length)];
};

var MarkovChain = require('markovchain')
  , fs = require('fs')
  , quotes = new MarkovChain(fs.readFileSync('./rabelais.txt', 'utf8'));

function generateSentence() {
  return quotes.start(useUpperCase).end(Math.floor((Math.random() * 3) + 6)).process() + ".";
}

function postTweet(sentence) {

  var tweet = {
    status: sentence
  };

  twitter.post('statuses/update', tweet , function(err, data, response) {
    if (err) {
      // console.log("5OMeTh1nG weNt wR0ng");
    } else {
      // console.log("Tweet sucessful");
    }
  });
}

postTweet(generateSentence);
// second parameter is in miliseconds
MNMNsetInterval(postTweet(generateSentence), 1000*60*60*11);
