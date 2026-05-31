import React from "react";
import { Container } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      {/* Background Effect */}
      <Particle />

      {/* HERO SECTION */}
      <Container fluid className="home-section" id="home">
        <div className="hero-wrapper">

          {/* Avatar / Image */}
          <div className="hero-image">
            <img src={homeLogo} alt="home" />
          </div>

          {/* Text Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              Hi There 👋
            </h1>

            <h1 className="hero-name">
              I'm <span className="purple">Divya Murugesan</span>
            </h1>

            <div className="hero-type">
              <Type />
            </div>

            <p className="hero-desc">
              Passionate Developer | React Enthusiast | Problem Solver
            </p>

            {/* Social Links */}
            <div className="hero-social">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>

              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <AiOutlineTwitter />
              </a>

              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>

              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
            </div>
          </div>

        </div>
      </Container>

      {/* NEXT SECTION */}
      <Home2 />
    </section>
  );
}

export default Home;