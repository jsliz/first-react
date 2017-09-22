'use strict';

console.log('App.js is running!');

var myApp = {
  title: 'My first react app',
  subtitle: 'In this section I will put more details soon'

  // JSX - JavaScript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    myApp.title.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    myApp.subtitle
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
