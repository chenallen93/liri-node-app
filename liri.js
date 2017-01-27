var req = require('request');
var command = process.argv[2]
var userChoice = process.argv[3];
if (command == "movie-this") {
req("http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&r=json", function (error, response, body) {
   
    console.log(JSON.parse(body).Title);
 	console.log(JSON.parse(body).Year);
 	console.log(JSON.parse(body).imdbRating);
 	console.log(JSON.parse(body).Country);
 	console.log(JSON.parse(body).Language);
 	console.log(JSON.parse(body).Plot);
 	console.log(JSON.parse(body).Actors);
 	console.log(JSON.parse(body).rottentomatoesRating);
 	console.log(JSON.parse(body).rottentomatoesUrl);
});
}