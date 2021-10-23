import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="./" className="nav-item nav-link">
        useContext
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            exact
            activeClassName="active"
            to="./"
            className="nav-item nav-link"
          >
            Home
          </NavLink>

          <NavLink
            exact
            activeClassName="active"
            to="./about"
            className="nav-item nav-link"
          >
            About
          </NavLink>

          <NavLink
            exact
            activeClassName="active"
            to="./LogIn"
            className="nav-item nav-link"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// Note adding the NavLink componets allow us to navigate throught pages without refreshin the browser or doing a http request
