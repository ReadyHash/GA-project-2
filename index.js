const express = require('express');

const app = express()

const pg = require('pg');

const reactEngine = require('express-react-views').createEngine();

app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

// creates request.body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

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
    // let foodQuery = "SELECT array( SELECT name FROM food) as foodlist;"
    let foodQuery = "SELECT * FROM food"
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

app.get('/food/:id', (request,response) => {
    console.log(request.params.id);
    let findThisFood = "SELECT * FROM food WHERE id = $1"
    let foodID = [request.params.id];

    whenFindIsDone = (error, result) => {
        if(error){
            console.log("finding had an error");
            console.log(error)
        }else{
            console.log("found food item...");

            let data = {
                food: result.rows
            }
            response.render('single', data);
        };

    };

    pool.query(findThisFood, foodID, whenFindIsDone);
})

app.get('/food/add', (request,response) => {
    // display drop down list for categories in views add.jsx
    let findCategory = "SELECT * FROM category";

    whenFindIsDone = (error, result) => {
        if(error){
            console.log("error occurred when finding categories");
            console.log(error);
        }else{
            let data = {
                category: result.rows
            };
            response.render('add', data);
        };
    };
    console.log("------------------------");
    console.log("Finding categories")
    pool.query(findCategory,whenFindIsDone);


})

// To add a new food item
app.post('/food/add/', (request, response) => {

    let addNewFood = "INSERT INTO food (category_id, name, description, mass, amount, price, expiry) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    let value = [
                    request.body.category,
                    request.body.name,
                    request.body.description,
                    request.body.mass,
                    request.body.amount,
                    request.body.price,
                    request.body.expiry
                ];

    let whenAddIsDone = (error, result) => {
        if(error){
            console.log("error occurred when added new food")
            console.log(error);
        }else{

            response.send("added food!");
            // check for value array
            console.log("array value")
            console.log(value)
            console.log("result");
            // show newly added row
            console.log(result);
        }
    }
    console.log("------------------------");
    console.log("Adding new food item...")
    pool.query(addNewFood, value, whenAddIsDone)
    // console.log("----------");
    // console.log(request.body);
})


// Route to show the homepage
// query and show groceries that are about to expire
// display picture of recipe
app.get('/home',(request, response ) => {
    let findFirstExpiry = "SELECT * FROM food WHERE food.expiry between now() and (now() + '1 week' ::interval);"

    whenDateIsDone = (error, result) => {
        if(error){
            console.log("error occurred when finding first expiry");
            console.log(error);
        }else{
            let firstExpiry = result.rows
            console.log("111111111");
            console.log(result.rows);

            let findSecondExpiry = "SELECT * FROM food WHERE food.expiry between (now() + '1 week' ::interval) and (now() + '2 weeks' ::interval); "
            whenDateIsDone = (error, result) => {
                if(error){
                    console.log("error occurred when finding second expiry");
                    console.log(error)
                }else{
                    let secondExpiry = result.rows
                    console.log("222222222");
                    console.log(result.rows);

                    let findThirdExpiry = "SELECT * FROM food WHERE food.expiry between (now() + '2 weeks' ::interval) and (now() + '3 weeks' ::interval); "
                    whenDateIsDone = (error, result) => {
                        if(error){
                            console.log("error occurred when finding third expiry");
                            console.log(error)
                        }else{
                            let thirdExpiry = result.rows
                            console.log("333333333");
                            console.log(result.rows);
                            let data = {
                                red: firstExpiry,
                                yellow: secondExpiry,
                                green: thirdExpiry
                            }
                            response.render('home', data);
                        }
                    }
                    pool.query(findThirdExpiry,whenDateIsDone)
                }
            }
            pool.query(findSecondExpiry,whenDateIsDone)
        }
    };
    pool.query(findFirstExpiry,whenDateIsDone)

});



app.get('/', (request,response) => {
    console.log("redirecting to home page")
    response.redirect('/home');
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));