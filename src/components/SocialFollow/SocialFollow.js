import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialFollow.scss";

const SocialFollow = () => (
  <div className="SocialFollow">
    <h4 className="social">Follow Me</h4>
    <div>
      <a href="https://twitter.com/ehimare369" className="tw">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://github.com/ehimare369" className="gh">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://youtube.com/ehimare369" className="yt">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://instagram.com/ehimare369" className="ig">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://facebook.com/ehimare369" className="fb">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  </div>
);

export default SocialFollow;
