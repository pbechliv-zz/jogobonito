import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import firebase from "firebase";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Home from "./components/Home";
import { setAuthUser } from "./store/actions";

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) this.props.setAuthUser(authUser);
    });
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

const mapStateToProps = state => ({
  authUser: state.authState.authUser
});

const mapDispatchToProps = { setAuthUser };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
