var Twit = require('twit');
var fs = require('fs');
var MarkovChain = require('markovchain');
var twitter = new Twit(require('botfiles/config.js'));

var useUpperCase = function(wordList) {
  var tempList = Object.keys(wordList).filter(function(word) {
    return word[0] >= "A" && word[0] <= "Z";
  });
  return tempList[~~(Math.random()*tempList.length)];
};

// change this to have it draw from a different text in botfiles
var quotes = new MarkovChain(fs.readFileSync('node_modules/botfiles/rabelais.txt', 'utf8'));

// Very basic. Starts with random uppercase work, adds 4 to 7 words and ends with a period.
// Better algorithm, generate sentences until it generates one that is within Twitter length constraints and ends with a naturally occuring word-followed by period.
// Constraints in computation power
function generateSentence() {
  return quotes.start(useUpperCase).end(Math.floor((Math.random() * 3) + 6)).process() + ".";
}

//function called by AWS Lambda
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