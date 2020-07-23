import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/HomeComp";
import Navbar from "./components/Navbar";
import "fdweb/fluent.css";
import "fdweb/fluent-icons.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/speakers" component={Home} />
          <Route path="/teams" component={Home} />
          <Route path="/coc" component={Home} />
        </Switch>
        <Navbar />
      </Router>
    );
  }
}

export default App;