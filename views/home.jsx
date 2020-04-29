var React = require('react');
class Home extends React.Component {
  render() {
    console.log(this.props)
    return (
      <html>
        <body>
          <div>
            <h1>This is the Home Page</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/food">Food</a>
                <a>Statistics</a>
                <a>Expiry</a>
            </nav>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;