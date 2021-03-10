import React from "react";
import "./MainLayout.scss";
import SideBar from "./../.././components/SideBar/SideBar";

const MainLayout = ({ children }) => (
  <>
    <SideBar />
    <div className="MainLayout">{children}</div>
  </>
);

export default MainLayout;
