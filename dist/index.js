var Twit = require('twit');
var fs = require('fs');
var MarkovChain = require('markovchain');
var twitter = new Twit(require('botfiles/config.js'));
// var corpus = require('botfiles/rabelais.txt');

var useUpperCase = function(wordList) {
  var tempList = Object.keys(wordList).filter(function(word) {
    return word[0] >= "A" && word[0] <= "Z";
  });
  return tempList[~~(Math.random()*tempList.length)];
};

var quotes = new MarkovChain(fs.readFileSync('node_modules/botfiles/rabelais.txt', 'utf8'));

function generateSentence() {
  return quotes.start(useUpperCase).end(Math.floor((Math.random() * 3) + 6)).process() + ".";
}

// function postTweet(sentence) {

//   var tweet = {
//     status: sentence
//   };

//   twitter.post('statuses/update', tweet , function(err, data, response) {
//     if (err) {
//       // console.log("5OMeTh1nG weNt wR0ng");
//     } else {
//       // console.log("Tweet sucessful");
//     }
//   });
// }

exports.handler = function myBot(event, context) {

  var tweet = {
    status: generateSentence()
  };

  twitter.post('statuses/update', tweet, function(err, reply) {
    if (err) {
      console.log('Error: ', err);
      context.fail();
    }
    else {
      console.log('tweet: ', reply);
      context.succeed();
    }
  });
};


// postTweet(generateSentence);
// second parameter is in miliseconds
// useful if I have a server going indefinitely
// setInterval( postTweet(generateSentence), 1000*60*60*11);