import React from "react";
import { Col, Row } from "react-bootstrap";

import { SiNextdotjs, SiSolidity, SiOpenai } from "react-icons/si";
import { FaRust } from "react-icons/fa";

import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
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
            <Col xs={6} md={2}><TechCard icon={<img src={ReactIcon} />} label="React.js" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Javascript} />} label="JavaScript" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Typescript} />} label="TypeScript" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Node} />} label="Node.js" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Mongo} />} label="MongoDB" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={SQL} />} label="PostgreSQL" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Redux} />} label="Redux" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Next} size={28} />} label="Next.js" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Git} />} label="Git" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={Docker} />} label="Docker" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={AWS} />} label="AWS" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Postman} />} label="Postman" /></Col>

      <Col xs={6} md={2}><TechCard icon={<img src={Tailwind} />} label="Tailwind" /></Col>
      <Col xs={6} md={2}><TechCard icon={<img src={MUI} />} label="Material UI" /></Col>

      {/* AI placeholder (empty icon as you asked) */}
      <Col xs={6} md={2}>
        <TechCard icon={<SiOpenai size={26} />} label="AI Tools" />
      </Col>
    </Row>
  );
}

export default Techstack;