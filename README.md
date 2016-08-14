# Yet another Markov Chain twitter bot
A gargantuan experiment.

[Follow me! Or don't, that's cool too!](https://twitter.com/rabelais_bot)

Inspired by e_books twitter bots, the [Markov_Noodles Ruby gem](https://github.com/dabrorius/markov-noodles), [this Medium article](https://medium.com/@DebashisBarman/creating-a-twitter-bot-with-node-js-bea760b80bd5#.gbtf5vc6t), [this other Medium article](https://medium.com/@emckean/create-a-simple-free-text-driven-twitterbot-with-aws-lambda-node-js-b80e26209f5#.coaj4ifhc)[(and it's repo)](https://github.com/emckean/blank-lambda-bot), and [Gargantua and Pantagruel](https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel).

Special thanks to [AWS Lambda](https://aws.amazon.com/lambda/).

To open:

npm install

It's important to install botfiles as a local module before you deploy.

npm install --save ./YOURENTIREPATH/botfiles

If you make changes:

rm -rf node_module/botfiles && npm install /YOURPATH/botfiles

Otherwise,

Check jshint and tests.

gulp lint

Deploy!


