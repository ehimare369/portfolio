import React from "react";
import "./SideBar.scss";
import Profile from "../Profile/Profile";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const SideBar = () => (
  <div className="SideBar">
    <Profile />
    <NavBar />
    <Footer />
  </div>
);

export default SideBar;
