import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import StageOne from "../1";
import StageTwo from "../2";
import StageThree from "../3";
import StageOneClass from "../1_class";
import "./styles.css";
import StageFour from "../4";
const App = () => {
  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul className="navbar">
            <li className="navItem">
              <Link className="navLink" to="/">
                1
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/2">
                2
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/3">
                3
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/4">
                4
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <Switch>
          <Route path="/2">
            <StageTwo />
          </Route>
          <Route path="/3">
            <StageThree />
          </Route>
          <Route path="/4">
            <StageFour />
          </Route>
          <Route path="/1-class">
            <StageOneClass />
          </Route>
          <Route exact path="/">
            <StageOne />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
