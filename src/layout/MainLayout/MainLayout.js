import React from "react";
import "./MainLayout.scss";
import SideBar from "./../.././components/SideBar/SideBar";
import SocialFollow from "../../components/SocialFollow/SocialFollow";

const MainLayout = ({ children }) => (
  <>
    <SideBar />
    <div className="MainLayout">{children}</div>
  </>
);

export default MainLayout;
