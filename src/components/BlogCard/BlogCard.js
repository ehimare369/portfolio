import React from "react";
// import PropTypes from 'prop-types';
import "./BlogCard.scss";

const BlogCard = () => (
  <div className="BlogCard">
    <p className="author">Ehimare Okosun</p>
    <p className="date">13 March 2021</p>
    {/* <img src="" alt="thumbnail" /> */}
    <div className="img"></div>
    <h2 className="title">JavaScript Object Manipulation</h2>
    <p className="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod magni
      harum pariatur in tempore, deserunt ducimus impedit.
    </p>
    <p className="cat">JavaScript, Python</p>
  </div>
);

BlogCard.propTypes = {};

BlogCard.defaultProps = {};

export default BlogCard;
