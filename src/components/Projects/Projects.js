import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ProjectCard({ title, description, tech, github, demo, tag }) {
  return (
    <div className="project-glass-card">
      <div className="project-top">
        <span className="project-tag">{tag}</span>
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-desc">{description}</p>

      <div className="project-tech">
        {tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          Live
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>

        <Row style={{ justifyContent: "center" }}>

          {/* 1 */}
          <Col md={4}>
            <ProjectCard
              tag="AI / CHAT SYSTEM"
              title="ChatGPT Clone (Groq Agent)"
              description="AI chatbot with agent-based architecture, conversation memory, and fast inference using Groq API."
              tech={["React + Vite", "TypeScript", "Node.js", "MongoDB", "Groq API"]}
              github="https://github.com/divya-m-a"
              demo="#"
            />
          </Col>

          {/* 2 */}
          <Col md={4}>
            <ProjectCard
              tag="MANAGEMENT SYSTEM"
              title="Smart Attendance System"
              description="Web-based attendance system for managing students, marking attendance, and storing records in database."
              tech={["React.js", "Node.js", "Express", "MongoDB"]}
              github="https://github.com/divya-m-a"
              demo="#"
            />
          </Col>

          {/* 3 (simple project now) */}
          <Col md={4}>
            <ProjectCard
              tag="CRUD APPLICATION"
              title="Task Manager App"
              description="A simple task management app to create, update, delete, and track daily tasks with persistent storage."
              tech={["React.js", "LocalStorage", "Bootstrap"]}
              github="https://github.com/divya-m-a"
              demo="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;