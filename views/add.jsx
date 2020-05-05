var React = require('react');
class Add extends React.Component {
  render() {
        console.log(this.props.category[1]);
        // display category into drop down list
        let categoryElement = this.props.category.map((category) => {
            console.log(category.name);
            <a>category.name</a>
            return
        });


    return (
      <html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      </head>
        <body>
          <div>
            <h1>This is the Add food Page</h1>
            <nav>
                <a href="/home">Home </a>
                <a href="/food">Foodlist </a>
                <a>Statistics </a>
                <a>Expiry </a>
            </nav>
            <form method="post" action="/food/add">

            <p>categories</p> {categoryElement}
            <p>name</p> <input name="name"/>
            <p>description</p>
            <p> eg. What did you need this ingredient for</p>
            <input name="description"/>
            <p>volume/weight in Kg or grams</p> <input name="mass"/>
            <p>amount </p>
            <p>eg. how many bags</p>
            <input name="amount"/>
            <p>price</p> <input name="price"/>
            <p>expiration date</p> <input name="expiry" type="date"/>
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