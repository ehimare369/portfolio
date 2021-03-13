import React from "react";
// import PropTypes from "prop-types";
import "./AboutPage.scss";

// Import Icons
import Icon from "@iconify/react";
import html from "@iconify-icons/logos/html-5";
import css from "@iconify-icons/logos/css-3";
import sass from "@iconify-icons/logos/sass";
import js from "@iconify-icons/logos/javascript";
import material from "@iconify-icons/logos/material-ui";
import react from "@iconify-icons/logos/react";
import node from "@iconify-icons/logos/nodejs-icon";
import express from "@iconify-icons/simple-icons/express";
import adonis from "@iconify-icons/simple-icons/adonisjs";
import mongodb from "@iconify-icons/logos/mongodb";
import postgres from "@iconify-icons/logos/postgresql";
import redis from "@iconify-icons/logos/redis";
import github from "@iconify-icons/logos/github-octocat";
import webpack from "@iconify-icons/logos/webpack";
import airbnb from "@iconify-icons/logos/airbnb";
import jest from "@iconify-icons/logos/jest";
import wordpress from "@iconify-icons/logos/wordpress";
import linux from "@iconify-icons/logos/linux-tux";
import cpanel from "@iconify-icons/logos/cpanel";

const AboutPage = () => (
  <>
    <div className="AboutPage">
      <div className="img">
        <img src="{okosun}" alt="okosun" />
      </div>
      <div className="about">
        <p className="text">
          Ehimare is a passionate, dedicated and hardworking web developer with
          a keen eye for detail, and a determination to deliver the very highest
          quality. He takes great pride in his work and he always try to better
          himself with every project he works on.
        </p>
        <div className="infos">
          <div className="info">
            <p>Full Name:</p>
            <p>Date Of Birth:</p>
            <p>Nationality:</p>
            <p>Years Of Experience:</p>
            <p>Languages:</p>
            <p>Residence:</p>
            <p>Phone Numbers:</p>
            <p>Email:</p>
            <p>Qualification:</p>
            <p>Time Zone:</p>
          </div>
          <div className="info">
            <p>Ehimare Okosun</p>
            <p>
              16<sup>th</sup> April, 1989{" "}
            </p>
            <p>Nigeria</p>
            <p>4+</p>
            <p>English</p>
            <p>Lagos, Nigeria</p>
            <p>
              <a href="tel:+2347067204436">+2347067204436</a>
            </p>
            <p>
              <a href="mailto:ehimare369@gmail.com">ehimare369@gmail.com</a>
            </p>
            <p>BSc. Civil Engineering</p>
            <p>GMT +1</p>
          </div>
        </div>
      </div>
    </div>

    {/* Skills Section */}
    <div className="skills">
      <h2 className="title">My Skills</h2>

      {/* Technical Skills */}
      <h3>Technical Skills</h3>
      <div className="tech-skills">
        <div className="fe-skills">
          <h4>Front End</h4>
          <div className="skill-icons">
            <p className="icons">
              <Icon className="iconify" icon={html} />
              <span>HTML5</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={css} />
              <span>CSS3</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={sass} />
              <span>SASS</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={js} />
              <span>JavaScript</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={material} />
              <span>Material UI</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={react} />
              <span>ReactJS</span>
            </p>
          </div>
        </div>

        <div className="be-skills">
          <h4>Back End</h4>
          <div className="skill-icons">
            <p className="icons">
              <Icon className="iconify" icon={node} />
              <span>NodeJS</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={express} />
              <span>ExpressJS</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={adonis} color="#4b0082" />
              <span>AdonisJS</span>
            </p>
          </div>
        </div>

        <div className="db-skills">
          <h4>Database</h4>
          <div className="skill-icons">
            <p className="icons">
              <Icon className="iconify" icon={mongodb} />
              {/* <span>MongoDB</span> */}
            </p>
            <p className="icons">
              <Icon className="iconify" icon={postgres} />
              <span>PostgresQL</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={redis} />
              <span>Redis</span>
            </p>
          </div>
        </div>

        <div className="vc-skills">
          <h4>VC-Build-Test</h4>
          <div className="skill-icons">
            <p className="icons">
              <Icon className="iconify" icon={github} />
              <span>Github</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={webpack} />
              <span>WebPack</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={airbnb} />
              <span>Enzyme</span>
            </p>
            <p className="icons">
              <Icon className="iconify" icon={jest} />
              <span>Jest</span>
            </p>
          </div>
        </div>

        <div className="ot-skills">
          <h4>Other Skills</h4>
          <div className="skill-icons">
            <p className="icons">
              <Icon className="iconify" icon={wordpress} />
              {/* <span>WordPress</span> */}
            </p>
            <p className="icons">
              <Icon className="iconify" icon={linux} />
              <span>Linux</span>
            </p>
            <p className="icons">
              <Icon icon={cpanel} />
              {/* <span>cPanel</span> */}
            </p>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <h3>Soft Skills</h3>
      <div className="soft-skills">
        <div className="sk">
          <p>Good communicator</p>
          <p>Problem solving</p>
          <p>Open mindedness</p>
          <p>Adaptability</p>
          <p>Leadership</p>
          <p>Good listener</p>
          <p>Determination</p>
        </div>
        <div className="sk">
          <p>Flexibility</p>
          <p>Creativity</p>
          <p>Team work</p>
          <p>Negotiation</p>
          <p>Mentoring</p>
          <p>Presentation</p>
          <p>Passion</p>
        </div>
      </div>
    </div>
  </>
);

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
