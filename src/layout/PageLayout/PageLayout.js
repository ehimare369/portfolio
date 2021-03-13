import React from "react";
import { Route } from "react-router-dom";
import "./PageLayout.scss";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

const PageLayout = ({ ...props }) => (
  <>
    <SideBar />
    <div className="PageLayout">
      <Header title={props.title} />
      {props.children}
    </div>
  </>
);

// Creating Routes for the layout
const PageLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PageLayout>
          <Component {...props} />
        </PageLayout>
      )}
    />
  );
};

export default PageLayoutRoute;
