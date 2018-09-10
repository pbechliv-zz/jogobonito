import React from "react";
import firebase from "../firebase";

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
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
    console.log(user);
  }

  handleInput(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-body">
          <h1 className="title">Administration Jogo Bonito</h1>
          <hr />
          <div className="columns">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
