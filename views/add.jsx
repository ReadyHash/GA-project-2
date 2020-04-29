var React = require('react');
class Add extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>This is the Add food Page</h1>
            <form method="post" action="/food/add">
            <button type="submit">Button to submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Add;