var https = require("https");

function getAndPrintHTML(options) {

  https.get(options, function(response) {

    var arr = [];
    response.setEncoding('utf8');

    response.on('data', function(data) {
      arr.push(data);
    });

    response.on('end', function() {
      for (i in arr) {
        console.log(arr[i]);
      }
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);