import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import firebase from "firebase";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      console.log("onAuthStateChanged")
      if (authUser) this.props.setAuthUser(authUser);
    });
  }

  render() {
    console.log(this.props);

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

const mapDispatchToProps = dispatch => ({
  setAuthUser: authUser => dispatch({ type: "SET_AUTH_USER", authUser })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
