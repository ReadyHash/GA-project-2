var React = require('react');
class Food extends React.Component {
    render() {
        console.log(this.props);
        let food = this.props.allFood;

        let addFoodElement = food.map(fooditem => {
            console.log("-----------");
            console.log(fooditem.id);
            let food_id = ("/food/" + fooditem.id);
            let element = <div>
                            <form action={food_id}>
                                <input type="submit" value={fooditem.name}/>
                            </form>
                         </div>
            return element;
        })
        console.log(addFoodElement)

        return (
        <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
            <body>
              <div>
                <h1>This is the Food Page</h1>
                <nav>
                    <a href="/home">Home </a>
                    <a href="/food">Foodlist </a>
                    <a>Statistics </a>
                    <a>Expiry </a>
                </nav>

                {addFoodElement}
                <div>
                <form action="/food/add">
                    <input type="submit" value="Add new food item"/>
                </form>
                </div>
              </div>
            </body>
        </html>
        );
    }
}

module.exports = Food;