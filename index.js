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
pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

// Route to show the list of food
app.get('/food', (request, response) => {
    // query command to list all foods
    let foodQuery = "SELECT array( SELECT name FROM food) as foodlist;"
    // callback function that runs after query is completed
    let whenDone = (error, result) => {
        // check for any errors
        if(error){
            console.log("error has occurred when querying food list");
            console.log(error)
        }else{
            // display the food page if succeed
            console.log("This data is being sent");
            console.log(result.rows);
            // storing all food into an object to be sent into food page
            const data = {
                allFood: result.rows
            }
            response.render('food', data);
        }
    };
    // run the query function
    pool.query(foodQuery, whenDone)

})

// Route to show the homepage
// query and show groceries that are about to expire
// display picture of recipe
app.get('/home',(request, response ) => {
    response.render('home');
});



app.get('/', (request,response) => {
    console.log("redirecting to home page")
    response.redirect('/home');
});

app.listen(3000, console.log("app is listening..."));