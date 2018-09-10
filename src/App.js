import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  render() {
    return (
      <Switch>
        <Navbar>
          <Route path="/admin" exact component={Admin} />
          <Route path="/" exact component={Home} />
        </Navbar>
      </Switch>
    );
  }
}

export default App;
