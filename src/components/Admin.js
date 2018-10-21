import React from "react";
import firebase from "../firebase";
import { connect } from "react-redux";
import PostForm from "./PostForm";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  async handleLogin(e) {
    e.preventDefault();
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
  }

  handleInput(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-body has-text-centered">
          <h1 className="title">Διαχείριση Jogo Bonito</h1>
          {this.props.authUser && (
            <h2 className="subtitle">Χρήστης: {this.props.authUser.email}</h2>
          )}
          <hr />
          <div className="columns">
            {!this.props.authUser ? (
              <div className="column is-4 is-offset-4">
                <form onSubmit={e => this.handleLogin(e)}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        value={this.state.email}
                        onChange={e => this.handleInput("email", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        value={this.state.password}
                        onChange={e => this.handleInput("password", e.target.value)}
                      />
                    </div>
                  </div>
                  <input type="submit" className="button is-primary" value="Submit" />
                </form>
              </div>
            ) : (
              <div className="column is-6 is-offset-3">
                <PostForm />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authState.authUser
  };
};

export default connect(mapStateToProps)(Admin);
