const express = require('express');

const app = express()

const pg = require('pg');

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

const configs = {
  user: 'shane',
  host: '127.0.0.1',
  database: 'grocer_db',
  port: 5432,
};

const pool = new pg.Pool(configs);

// receive the request to display the home page
// query and show groceries that are about to expire
// display picture of recipe

app.get('/home',(request, response ) => {
    response.render('home');
});

app.get('/food', (request, response) => {
    response.render('food');
})

app.get('/', (request,response) => {
    console.log("redirecting to home page")
    response.redirect('/home');
});

app.listen(3000, console.log("app is listening..."));