import React from "react";
import PropTypes from "prop-types";
import "./MainLayout.scss";
import SideBar from "./../.././components/SideBar/SideBar";

const MainLayout = () => (
  <div>
    <div>
      <SideBar />
    </div>
    <div className="MainLayout">MainLayout Component</div>
  </div>
);

MainLayout.propTypes = {};

MainLayout.defaultProps = {};

export default MainLayout;
