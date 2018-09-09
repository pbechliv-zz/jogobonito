import React from "react";

class Admin extends React.Component {
  handleLogin(e) {
    e.preventDefault();
    console.log(e);
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
                    <input className="input" type="email" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" />
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
