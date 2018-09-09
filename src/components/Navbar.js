import React from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    burgerToggled: false
  };

  toggleBurger() {
    this.setState(prevState => ({ burgerToggled: !prevState.burgerToggled }));
  }

  render() {
    return (
      <div>
        <nav className="navbar is-fixed-top is-dark">
          <div className="container">
            <div className="navbar-brand">
              <NavLink
                activeClassName="is-active"
                to="/"
                className="navbar-item"
              >
                Jogo Bonito
              </NavLink>
              <div
                role="button"
                className={`navbar-burger ${this.state.burgerToggled &&
                  "is-active"}`}
                onClick={() => this.toggleBurger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              className={`navbar-menu ${this.state.burgerToggled &&
                "is-active"}`}
            >
              <div className="navbar-start ">
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/football"
                    className="navbar-link"
                  >
                    Ποδόσφαιρο
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link to="/football/greece" className="navbar-item">
                      Ελλάδα
                    </Link>
                    <Link to="/football/europe" className="navbar-item">
                      Ευρώπη
                    </Link>
                    <Link to="/football/latin" className="navbar-item">
                      Λατινική Αμερική
                    </Link>
                    <Link to="/football/rest" className="navbar-item">
                      Υπόλοιπος κόσμος
                    </Link>
                    <Link to="/football/mundial" className="navbar-item">
                      Mundial
                    </Link>
                    <Link to="/football/euro" className="navbar-item">
                      Euro
                    </Link>
                    <Link to="/football/copaamerica" className="navbar-item">
                      Copa America
                    </Link>
                    <Link to="/football/copaafrica" className="navbar-item">
                      Copa Africa
                    </Link>
                    <Link to="/football/international" className="navbar-item">
                      Διεθνείς οργανώσεις
                    </Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/basketball"
                    className="navbar-link"
                  >
                    Μπάσκετ
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link to="/basketball/greece" className="navbar-item">
                      Ελλάδα
                    </Link>
                    <Link to="/basketball/europe" className="navbar-item">
                      Ευρώπη
                    </Link>
                    <Link to="/basketball/nba" className="navbar-item">
                      NBA
                    </Link>
                    <Link to="/basketball/latin" className="navbar-item">
                      Λατινική Αμερική
                    </Link>
                    <Link to="/basketball/rest" className="navbar-item">
                      Υπόλοιπος κόσμος
                    </Link>
                    <Link to="/basketball/euro" className="navbar-item">
                      Ευρωπαϊκό
                    </Link>
                    <Link to="/football/mundo" className="navbar-item">
                      Μουντομπάσκετ
                    </Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/tributes"
                    className="navbar-link"
                  >
                    Αφιερώματα
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link to="/tributes/football" className="navbar-item">
                      Ποδόσφαιρο
                    </Link>
                    <Link to="/tributes/basketball" className="navbar-item">
                      Μπάσκετ
                    </Link>
                    <Link to="/tributes/other" className="navbar-item">
                      Αλλα σπορ
                    </Link>
                  </div>
                </div>
                <NavLink
                  activeClassName="is-active"
                  className="navbar-item"
                  to="/interviews"
                >
                  Συνεντεύξεις
                </NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink
                    activeClassName="is-active"
                    to="/other"
                    className="navbar-link"
                  >
                    Άλλα
                  </NavLink>
                  <div className="navbar-dropdown">
                    <Link to="/other/books" className="navbar-item">
                      Βιβλία
                    </Link>
                    <Link to="/other/movies" className="navbar-item">
                      Ταινίες
                    </Link>
                    <Link to="/other/music" className="navbar-item">
                      Μουσική
                    </Link>
                    <Link to="/other/video" className="navbar-item">
                      Βίντεο
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="container">{this.props.children}</main>
      </div>
    );
  }
}

export default Navbar;
