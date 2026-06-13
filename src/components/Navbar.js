import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setSticky(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={sticky ? "navbar sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="brand">
<Navbar.Brand href="/" className="logo-glass">
  DM
</Navbar.Brand>        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpand(expand ? false : "expanded")}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)} className="nav-link-custom">
              <AiOutlineHome /> Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)} className="nav-link-custom">
              <AiOutlineUser /> About
            </Nav.Link>

            <Nav.Link as={Link} to="/project" onClick={() => setExpand(false)} className="nav-link-custom">
              <AiOutlineFundProjectionScreen /> Projects
            </Nav.Link>

            <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)} className="nav-link-custom">
              <CgFileDocument /> Resume
            </Nav.Link>

            

            <Button
                            href="https://github.com/divya-m-a"

              target="_blank"
              className="github-btn"
            >
              <CgGitFork /> <AiFillStar /> GitHub
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;