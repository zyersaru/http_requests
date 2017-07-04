var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function (response) {
    var buff = '';
    response.on('data', function (data) {
      buff += data;
    });
    response.on('end', function () {
      console.log(buff);
    });
  });
};