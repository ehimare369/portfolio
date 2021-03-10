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
      <a href="https://twitter.com/ehimare369" target="_blank" className="tw">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://github.com/ehimare369" target="_blank" className="gh">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://youtube.com/ehimare369" target="_blank" className="yt">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://instagram.com/ehimare369" target="_blank" className="ig">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://facebook.com/ehimare369" target="_blank" className="fb">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  </div>
);

export default SocialFollow;
