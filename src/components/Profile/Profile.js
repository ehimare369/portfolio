import React from "react";
import PropTypes from "prop-types";
import "./Profile.scss";
import avatar from "../../img/ehimare.jpg";

const Profile = () => (
  <div className="Profile">
    <img src={avatar} alt="Ehimare Okosun" />
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
