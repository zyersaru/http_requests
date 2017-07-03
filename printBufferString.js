var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
https.get(requestOptions, function (response) {
  response.on('data', function (data) {
    data += data.length;
    console.log(data + '\n');
  });

  response.on('end', function () {
  });
});
}

getAndPrintHTML();