import React from "react";
import { Route } from "react-router-dom";
import "./HomeLayout.scss";
import SideBar from "../../components/SideBar/SideBar";
// import Header from "../../components/Header/Header";

const HomeLayout = ({ children }) => (
  <>
    <SideBar />
    <div className="HomeLayout">{children}</div>
  </>
);

// Creating Routes for the layout
const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <HomeLayout>
          <Component {...props} />
        </HomeLayout>
      )}
    />
  );
};

export default HomeLayoutRoute;
