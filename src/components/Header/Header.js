import React from "react";
import "./Header.scss";

const Header = (props) => {
  const { imgUrl, imgAlt, title, desc } = props;
  return (
    <header className="Header">
      {/* <img src={imgUrl} alt={imgAlt} /> */}
      <h3>{title}</h3>
      <p>{desc}</p>
    </header>
  );
};

export default Header;
