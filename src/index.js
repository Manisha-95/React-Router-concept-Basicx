import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import RouterEx from "./Router";

class App extends Component {
  render() {
    return (
      <div>
        <RouterEx />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
