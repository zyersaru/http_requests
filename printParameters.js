var https = require("https");

function getAndPrintHTML (options) {
  /* Add your code here */
  https.get(options, function (response) {
    var buff = '';
    response.on('data', function (data) {
      buff += data;
    });
    response.on('end', function () {
      console.log(buff);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
