import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav activeClassName="navbar navbar-expand-sm navbar-dark bg-dark">
      <div activeClassName="collapse navbar-collapse" id="navbarNav">
        <NavLink activeClassName="nav-NavLink" to="./">
          Home
        </NavLink>

        <NavLink activeClassName="nav-NavLink" to="./about">
          About
        </NavLink>

        <NavLink activeClassName="nav-NavLink" to="./LogIn">
          Log In
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

// Note adding the NavLink componets allow us to navigate throught pages without refreshin the browser or doing a http request
