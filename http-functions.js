var https = require("https");

function getHTML (options, callback) {

  https.get(options, function(response) {

    var arr = [];
    response.setEncoding('utf8');

    response.on('data', function(data) {
      arr.push(data);
    });

    response.on('end', function() {
      for (i in arr) {
       callback(arr[i]);
      }
    });

  });
}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

//getHTML(requestOptions,printHTML);

module.exports = function getHTML (options, callback) {

  https.get(options, function(response) {

    var arr = [];
    response.setEncoding('utf8');

    response.on('data', function(data) {
      arr.push(data);
    });

    response.on('end', function() {
      for (i in arr) {
       callback(arr[i]);
      }
    });

  });
}