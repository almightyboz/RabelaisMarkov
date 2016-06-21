var Twit = require('twit');
// var twitInfo = [consumer_key, consumer_secret, access_token, access_token_secret];

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

var sentence = quotes.start(useUpperCase).end(Math.floor((Math.random() * 3) + 6)).process() + ".";

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

postTweet(sentence);
// second parameter is in miliseconds
setInterval(postTweet(sentence), 1000*60*60*11);