import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="Footer">
    &copy; 2020-{new Date().getFullYear()}. Made With 💓
  </footer>
);

export default Footer;
