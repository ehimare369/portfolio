import React from "react";
import PropTypes from "prop-types";
import "./HomePage.scss";
import SocialFollow from "../../components/SocialFollow/SocialFollow";

const HomePage = () => (
  <div className="HomePage">
    <h1>
      Hi, my name is
      <span className="name"> Ehimare Okosun.</span>
    </h1>
    <h2>
      I am a<span className="title"> </span>
    </h2>
    <p>I build beautiful things for the web😇.</p>

    <div className="icons">
      <SocialFollow />
    </div>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
