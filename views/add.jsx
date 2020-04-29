var React = require('react');
class Add extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>This is the Add food Page</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/food">Food</a>
                <a>Statistics</a>
                <a>Expiry</a>
            </nav>
            <form method="post" action="/food/add">

            <p>name</p> <input name="name"/>
            <p>description</p> <input name="description"/>
            <p>volume/weight</p> <input name="mass"/>
            <p>amount</p> <input name="amount"/>
            <p>price</p> <input name="price"/>
            <p>expiration date</p> <input name="expiry"/>
            <br></br>
            <button type="submit">Button to submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Add;