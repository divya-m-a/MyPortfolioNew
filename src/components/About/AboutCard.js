import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="about-modern-card">

      {/* HEADER */}
      <div className="about-card-header">
        About Me
      </div>

      <Card.Body>

        {/* INTRO */}
        <p className="about-intro">
          Hi, I’m <span>Soumyajit Behera</span> from{" "}
          <span>Bhubaneswar, India</span>.
          <br />
          I work as a <span>Software Developer</span> at <span>Juspay</span>.
          <br />
          I hold an Integrated M.Sc. in <span>Mathematics and Computing</span>{" "}
          from <span>BIT Mesra</span>.
        </p>

        {/* ACTIVITIES */}
        <div className="activity-box">

          <div className="activity-item">
            <ImPointRight /> Playing Games 🎮
          </div>

          <div className="activity-item">
            <ImPointRight /> Writing Tech Blogs ✍️
          </div>

          <div className="activity-item">
            <ImPointRight /> Traveling 🌍
          </div>

        </div>

        {/* QUOTE */}
        <div className="quote-box">
          “Strive to build things that make a difference!”
        </div>

        <div className="quote-author">
          — Soumyajit
        </div>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;