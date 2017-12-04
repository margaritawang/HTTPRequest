var https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      var arr = data.split('\n');
      for (i in arr) {
        console.log(arr[i]);
      }
    });
  });
}


getAndPrintHTML();