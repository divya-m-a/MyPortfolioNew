import React from "react";
import { Col, Row } from "react-bootstrap";

import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function ToolCard({ icon, label }) {
  return (
    <div className="tool-card">
      <div className="tool-icon">{icon}</div>
      <div className="tool-label">
        <span className="tool-title">Tools</span>
        <span className="tool-name">{label}</span>
      </div>
    </div>
  );
}

function Toolstack() {
  return (
    <div className="tool-section">
      <h2 className="section-title">
        🛠️ <span sx={{ color :"black"}}>My Tools Stack</span>
      </h2>

      <Row className="tool-wrapper">
        {/* <Col xs={6} md={3}>
        </Col> */}
        <Col xs={6} md={3}>
          <ToolCard icon={<img src={chrome} alt="Chrome" />} label="Chrome" />
        </Col>

        <Col xs={6} md={3}>
          <ToolCard icon={<img src={vsCode} alt="VS Code" />} label="VS Code" />
        </Col>

        {/* <Col xs={6} md={3}>
          <ToolCard icon={<img src={intelliJ} alt="IntelliJ" />} label="IntelliJ" />
        </Col> */}
      </Row>
    </div>
  );
}

export default Toolstack;