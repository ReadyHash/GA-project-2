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
                <nav>
                    <a href="/home">Home</a>
                    <a href="/food">Food</a>
                    <a>Statistics</a>
                    <a>Expiry</a>
                </nav>
                <ol>{addFoodElement}</ol>
                <button type="button">Add new food</button>
              </div>
            </body>
        </html>
        );
    }
}

module.exports = Food;