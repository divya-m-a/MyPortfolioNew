import React from "react";
import { Col, Row } from "react-bootstrap";

import { SiOpenai } from "react-icons/si";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Next from "../../Assets/TechIcons/Next.svg";




const TechCard = ({ icon, label }) => (
  <div className="tech-card">
    <div className="tech-icon">{icon}</div>
    <div className="tech-label">{label}</div>
  </div>
);

function Techstack() {
  return (
    <Row className="tech-wrapper">
            <Col xs={6} md={2}><TechCard icon={<img src={ReactIcon} alt="React" />} label="React.js" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Javascript} alt="JavaScript" />} label="JavaScript" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Typescript} alt="TypeScript" />} label="TypeScript" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Node} alt="Node.js" />} label="Node.js" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Mongo} alt="MongoDB" />} label="MongoDB" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={SQL} alt="PostgreSQL" />} label="PostgreSQL" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Redux} alt="Redux" />} label="Redux" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Next} alt="Next.js" width="28" height="28" />} label="Next.js" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Git} alt="Git" />} label="Git" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Docker} alt="Docker" />} label="Docker" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={AWS} alt="AWS" />} label="AWS" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Postman} alt="Postman" />} label="Postman" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Tailwind} alt="Tailwind" />} label="Tailwind" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={MUI} alt="Material UI" />} label="Material UI" /></Col>

      {/* AI placeholder (empty icon as you asked) */}
      <Col xs={6} md={2}>
        <TechCard icon={<SiOpenai size={26} />} label="AI Tools" />
      </Col>
    </Row>
  );
}

export default Techstack;