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
          Hi, I’m <span>Divya M A</span> from{" "}
          <span>Tamil Nadu, India</span>.
          <br />
          I am a <span>Frontend Developer</span> passionate about building modern web apps.
          <br />
          I love learning <span>React, JavaScript, and UI design</span>.
        </p>

        {/* ACTIVITIES */}
        <div className="activity-box">

          <div className="activity-item">
            <ImPointRight /> Building Web Projects 💻
          </div>

          <div className="activity-item">
            <ImPointRight /> Learning New Technologies 📚
          </div>

          <div className="activity-item">
            <ImPointRight /> Designing UI/UX 🎨
          </div>

        </div>

        {/* QUOTE */}
        <div className="quote-box">
          “Code, Learn, Build, Repeat.”
        </div>

        <div className="quote-author">
          — Divya M A
        </div>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;