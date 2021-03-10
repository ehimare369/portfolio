import React from "react";
import PropTypes from "prop-types";
import "./Profile.scss";
import avatar from "../../img/ehimare.jpg";
// import SocialFollow from "../SocialFollow/SocialFollow";

const Profile = () => (
  <div className="Profile">
    <img src={avatar} alt="Ehimare Okosun" />
    {/* <SocialFollow /> */}
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
