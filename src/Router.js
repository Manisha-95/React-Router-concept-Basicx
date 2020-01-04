import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class RouterEx extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              {" "}
              <Link to="/About">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/dashboard">
            {" "}
            <Dashboard />{" "}
          </Route>
        </Switch>
      </Router>
    );
  }
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>DashBoard</h2>
    </div>
  );
}

export default RouterEx;
