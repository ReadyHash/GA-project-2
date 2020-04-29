var React = require('react');
class Food extends React.Component {
    render() {
        console.log(this.props.allFood);
        let fruits = ["apple", "beetroot", "carrot"];
        let addfruitElement = fruits.map(fruit => {
            console.log(fruit);
            <p>fruit</p>
            return fruit;
        })
        return (
        <html>
            <body>
              <div>
                <h1>This is the Food Page</h1>
                <div>{addfruitElement}</div>
              </div>
            </body>
        </html>
        );
    }
}

module.exports = Food;