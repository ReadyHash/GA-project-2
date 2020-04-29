var React = require('react');
class Food extends React.Component {
    render() {
        console.log(this.props);
        let food = this.props.allFood;
        let addFoodElement = food.map(fooditem => {
            console.log(fooditem);
            <button>fooditem</button>
            return fooditem.name;
        })
        console.log(addFoodElement)

        return (
        <html>
            <body>
              <div>
                <h1>This is the Food Page</h1>
                <ol>{addFoodElement}</ol>
              </div>
            </body>
        </html>
        );
    }
}

module.exports = Food;