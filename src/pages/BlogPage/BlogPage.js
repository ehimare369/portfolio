import React from "react";
// import PropTypes from 'prop-types';
import "./BlogPage.scss";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogPage = () => (
  <div className="BlogPage">
    <BlogCard />
    <BlogCard />
    <BlogCard />
  </div>
);

BlogPage.propTypes = {};

BlogPage.defaultProps = {};

export default BlogPage;
