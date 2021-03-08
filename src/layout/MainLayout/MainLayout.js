import React from "react";
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

export default MainLayout;
