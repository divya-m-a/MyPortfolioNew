import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girl.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <section className="about-section-modern" id="about">
      <Container>

        <Row className="align-items-center">

          {/* TEXT SIDE */}
          <Col md={7}>
            <div className="about-card">

              <h1 className="about-title">
                LET ME <span>INTRODUCE</span> MYSELF
              </h1>

              <p className="about-text">
                I’m a Software Engineer focused on building scalable and high-performance systems.
                I enjoy turning ideas into real-world products with clean UI and strong backend logic.
              </p>

              <div className="skill-box">
                <span>JavaScript</span>
                <span>React Js</span>
                <span>Node.js</span>
                <span>Express Js</span>
              </div>

              <p className="about-text">
                I specialize in building <b>Web Applications</b> and exploring{" "}
                <b>solutions</b> with modern architectures.
              </p>

              <p className="about-text">
                I prefer working with <b className="highlight">React.js</b> and{" "}
                <b className="highlight">Next.js</b> for frontend development.
              </p>

            </div>
          </Col>

          {/* IMAGE SIDE */}
          <Col md={5} className="text-center">
            <div className="avatar-card">
              <Tilt>
                <img src={myImg} alt="avatar" className="avatar-img" />
              </Tilt>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Home2;