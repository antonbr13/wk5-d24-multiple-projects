// Problem: We need a simple way to look at a users badge count and JS points
// Soltuion: Use node.js to connect to Treehouse's API to get profile info to print out

var username = 'antonbredl';
var https = require('https');

function printMessage(username, badgeCount, points) {
   var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in JS';

   console.log(message);

}


// Connect to API URL (https://teamtreehouse.com/username.json)

var request = https.get('https://teamtreehouse.com/' + username + '.json',
   function(response) {
      var body = '';

// Read Data
      response.on('data', function(chunk) {
         body += chunk;
      });

      response.on('end', function() {
         var profile = JSON.parse(body);
      });

});


// Read Data
// Parse the Data
// Print the Data



request.on('error', function(error) {
   console.error(error.message);
});
