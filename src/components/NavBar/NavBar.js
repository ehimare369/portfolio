import React from "react";
import PropTypes from "prop-types";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="nav">
      <ul class="nav-items">
        <li class="nav-item">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/about" exact activeClassName="active">
            About
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/portfolio" exact activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/blog" exact activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/contact" exact activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
