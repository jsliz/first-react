console.log('App.js is running!');


var myApp = {
  title: 'My first react app',
  subtitle: 'In this section I will put more details soon'
}


// JSX - JavaScript XML
var template =
  <div>
    <h1>{myApp.title.toUpperCase()}</h1>
    <p>{myApp.subtitle}</p>
  </div>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
