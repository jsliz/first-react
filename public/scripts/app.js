'use strict';

console.log('it is on :) ');

var template = React.createElement(
  'h1',
  null,
  'Here is my first react!'
);

var myApp = document.getElementById('app');

ReactDOM.render(template, myApp);
