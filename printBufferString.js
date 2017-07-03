var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
    var buff = '';
    response.on('data', function (data) {
      // data += data.length;
      buff += data;
      // console.log(data + '\n');
    });

    response.on('end', function () {
      console.log(buff);
    });
  });
}

getAndPrintHTML();