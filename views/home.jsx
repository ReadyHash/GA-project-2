var React = require('react');
class Home extends React.Component {
  render() {
    console.log("%%%%%%%%%%%%%%%%%%%%");
    console.log(this.props)
    console.log("%%%%%%%%%%%%%%%%%%%%");
    let red = this.props.red
    let yellow = this.props.yellow
    let green = this.props.green

    let redElement = red.map(red => {
        console.log("this is " + red.name);
        let nameRed = (red.name);

        return <input className="col bg-danger" type="button" name={nameRed} value = {red.name}/>
    })
    let yellowElement = yellow.map(yellow => {
        console.log("this is " + yellow.name);
        let nameyellow = (yellow.name);

        return <input className="col bg-warning" type="button" name={nameyellow} value = {yellow.name}/>
    })
    let greenElement = green.map(green => {
        console.log("this is " + green.name);
        let namegreen = (green.name);

        return <input className="col bg-success" type="button" name={namegreen} value = {green.name}/>
    })
    return (
      <html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      </head>
        <body>
          <div className="container">
            <h1>This is the Home Page</h1>
            <nav>
                <a href="/home">Home </a>
                <a href="/food">Foodlist </a>
                <a>Statistics </a>
                <a>Expiry </a>
            </nav>
            {redElement}
            {yellowElement}
            {greenElement}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;