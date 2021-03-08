import React from "react";
import PropTypes from "prop-types";
import "./SideBar.scss";
import NavBar from "../NavBar/NavBar";

const SideBar = () => (
  <div className="SideBar">
    <NavBar />
  </div>
);

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;
