import React from "react";
import ReactDom from "react-dom";
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    
    state = { lat: null, errMassage: "" };
 
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ let: position.coords.latitude }),    
      err =>  this.setState({ errMassage: err.message })
    );
  }

  // react says we have to define render
  render() {
    if (this.state.errMassage && !this.state.lat) {
      return <div>error: {this.state.errMassage} </div>;
    }

    if (!this.state.errMassage && this.state.let) {
      return <SeasonDisplay lat = {this.state.let} />
    }

    return <Loader />;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
