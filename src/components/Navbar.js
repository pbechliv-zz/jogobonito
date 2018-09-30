import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../firebase";

class Navbar extends React.Component {
  state = {
    burgerToggled: false
  };

  toggleBurger() {
    this.setState(prevState => ({ burgerToggled: !prevState.burgerToggled }));
  }

  handleLogout() {
    const auth = firebase.auth();
    auth.signOut();
  }

  render() {
    return (
      <div>
        <nav className="navbar is-fixed-top is-dark">
          <div className="container">
            <div className="navbar-brand">
              <NavLink activeClassName="is-active" to="/" exact className="navbar-item">
                Jogo Bonito
              </NavLink>
              <div
                role="button"
                className={`navbar-burger ${this.state.burgerToggled && "is-active"}`}
                onClick={() => this.toggleBurger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className={`navbar-menu ${this.state.burgerToggled && "is-active"}`}>
              <div className="navbar-start ">
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/football"
                    className="navbar-link"
                    onClick={() => this.toggleBurger()}
                  >
                    Ποδόσφαιρο
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link
                      to="/football/greece"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Ελλάδα
                    </Link>
                    <Link
                      to="/football/europe"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Ευρώπη
                    </Link>
                    <Link
                      to="/football/latin"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Λατινική Αμερική
                    </Link>
                    <Link
                      to="/football/rest"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Υπόλοιπος κόσμος
                    </Link>
                    <Link
                      to="/football/mundial"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Mundial
                    </Link>
                    <Link
                      to="/football/euro"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Euro
                    </Link>
                    <Link
                      to="/football/copaamerica"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Copa America
                    </Link>
                    <Link
                      to="/football/copaafrica"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Copa Africa
                    </Link>
                    <Link
                      to="/football/international"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Διεθνείς οργανώσεις
                    </Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/basketball"
                    className="navbar-link"
                    onClick={() => this.toggleBurger()}
                  >
                    Μπάσκετ
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link
                      to="/basketball/greece"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Ελλάδα
                    </Link>
                    <Link
                      to="/basketball/europe"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Ευρώπη
                    </Link>
                    <Link
                      to="/basketball/nba"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      NBA
                    </Link>
                    <Link
                      to="/basketball/latin"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Λατινική Αμερική
                    </Link>
                    <Link
                      to="/basketball/rest"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Υπόλοιπος κόσμος
                    </Link>
                    <Link
                      to="/basketball/euro"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Ευρωπαϊκό
                    </Link>
                    <Link
                      to="/football/mundo"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Μουντομπάσκετ
                    </Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/tributes"
                    className="navbar-link"
                    onClick={() => this.toggleBurger()}
                  >
                    Αφιερώματα
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link
                      to="/tributes/football"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Ποδόσφαιρο
                    </Link>
                    <Link
                      to="/tributes/basketball"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Μπάσκετ
                    </Link>
                    <Link
                      to="/tributes/other"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Αλλα σπορ
                    </Link>
                  </div>
                </div>
                <NavLink
                  activeClassName="is-active"
                  className="navbar-item"
                  to="/interviews"
                  onClick={() => this.toggleBurger()}
                >
                  Συνεντεύξεις
                </NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/other"
                    onClick={() => this.toggleBurger()}
                    className="navbar-link"
                  >
                    Άλλα
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link
                      to="/other/books"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Βιβλία
                    </Link>
                    <Link
                      to="/other/movies"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Ταινίες
                    </Link>
                    <Link
                      to="/other/music"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Μουσική
                    </Link>
                    <Link
                      to="/other/video"
                      className="navbar-item"
                      onClick={() => this.toggleBurger()}
                    >
                      Βίντεο
                    </Link>
                  </div>
                </div>
              </div>
              {this.props.authUser && (
                <div className="navbar-end">
                  <a className="navbar-item" href={null} onClick={() => this.handleLogout()}>
                    Αποσύνδεση
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authState.authUser
});

export default withRouter(connect(mapStateToProps)(Navbar));
