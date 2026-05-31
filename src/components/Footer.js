import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-modern">
      <Container>
        <div className="footer-card">

          <Row className="align-items-center text-center">

            {/* LEFT TEXT */}
            <Col md={4}>
              <h3 className="footer-text">
                Designed & Built by{" "}
                <span className="footer-highlight">
                  Divya Murugesan
                </span>
              </h3>
            </Col>

            {/* CENTER TEXT */}
            <Col md={4}>
              <h3 className="footer-text">
                © {year}{" "}
                <span className="footer-highlight">
                  All Rights Reserved
                </span>
              </h3>
            </Col>

            {/* SOCIAL ICONS */}
            <Col md={4}>
              <ul className="footer-icons">

                <li>
                  <a
                    href="https://github.com/divya-m-a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/divya-murugesan-7bbb15298"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>

              </ul>
            </Col>

          </Row>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;