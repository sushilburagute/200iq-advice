import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    console.log("Hey! I've got the initial advise!");
    this.fetchAdvice();
  }

  //method
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
        console.log("button pressed");
      })
      .catch((response) => {
        console.log(response);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h2 className="heading">{advice}</h2>
          <h6 className="heading">
            As Rancho famously said in 3 idiots, "Free advise hai. Lena hai toh
            lo, nahitoh jaane do!"
          </h6>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
