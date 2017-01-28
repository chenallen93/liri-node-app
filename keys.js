console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: 'JEUexiOHMdQqpV47JCSsVnX1u',
  consumer_secret: 'hgzr8GdkISVuUD6hAAnrqXwtymvX7l9iYFd7ZRW4yOqaej1m9S',
  access_token_key: '4218502163-m1mxuMnm373Jv8aq1P5hspTfByN7IHcsqY6dq62',
  access_token_secret: 'kB43w5WT7z83i9zUFbipc42j4ytIdJqcKNSCk6IcVBo2R',
}

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});