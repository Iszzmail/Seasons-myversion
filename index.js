import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends React.Component {
  state = { latitude: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({ latitude: position.coords.latitude })},
      (error) => {this.setState({ error: error.message })}
      
    );
  }

  render() {
      if(this.state.latitude && !this.state.error){
          return <SeasonDisplay lat={this.state.latitude}/>
      }

      if(!this.state.latitude && this.state.error){
          return <div>Error:{this.state.error}</div>
      }
      return <Loading message="Please click Allow" />

}
}

ReactDOM.render(<App />, document.querySelector("#root"));
