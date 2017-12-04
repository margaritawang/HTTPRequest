var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowercase (html) {
  var lower = html.toLowerCase();
  console.log(lower);
}

getHTML(requestOptions,printLowercase);
