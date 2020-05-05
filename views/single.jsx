var React = require('react');
class Single extends React.Component {
  render() {
    console.log(this.props.food[0].id)
    return (
      <html>
        <body>
          <div>
            <h1>Food item</h1>
            <nav>
                <a href="/home">Home </a>
                <a href="/food">Foodlist </a>
                <a>Statistics </a>
                <a>Expiry </a>
            </nav>
            <article>
                <h1>{this.props.food[0].name}</h1>
                <h6>description</h6>
                <p>{this.props.food[0].description}</p>
                <h2>The mass is {this.props.food[0].mass}</h2>
                <h2>You bought {this.props.food[0].amount} {this.props.food[0].name}</h2>
                <h2>It cost {this.props.food[0].price}</h2>
                <input type="date" value={this.props.food[0].expiry}/>
            </article>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Single;