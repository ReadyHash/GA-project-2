var React = require('react');
class Food extends React.Component {
    render() {
        console.log(this.props);
        let food = this.props.allFood;
        let addFoodElement = food.map(fooditem => {
            console.log(fooditem.name);
            let element = <div><button type="button">{fooditem.name}</button></div>
            return element;
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
                {addFoodElement}
                <form action="/food/add">
                    <input type="submit" value="Add new food item"/>
                </form>
              </div>
            </body>
        </html>
        );
    }
}

module.exports = Food;