import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cvu from "../../Assets/Projects/cvu.PNG";
import plenitude from "../../Assets/Projects/plenitude.PNG";
import fitabsolutepro from "../../Assets/Projects/fitabsolutepro.PNG";
import chat from "../../Assets/Projects/clinical-beauty.svg";
import translate from "../../Assets/Projects/translateme2text.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="color-text">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translate}
              isBlog={false}
              title="TranslateMe2Text — Real-Time Translation SaaS"
              description="Live SaaS product I architected end-to-end at Manoa Tech: real-time audio transcription &amp; translation with ~400ms latency, 90% voice recognition accuracy, and 2+ simultaneous languages with zero install. Built on React, Node.js, Python, Redis, DeepGram &amp; DeepL — deployed on Docker + Kubernetes. Serving churches, conferences and multilingual events (€9–€129/month tiers)."
              ghLink="https://www.manoalda.com/products"
              demoLink="https://translate.manoalda.com/demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Clinical Beauty — Agentic AI Assistant"
              description="Multi-agent AI workflow built with N8N + MCP protocol, integrating Google Calendar &amp; Gmail to fully automate client scheduling and appointment reminders. RAG pipeline enables intelligent retrieval of clinical services info. Reduced manual client communication by 6 hours/week. End-to-end deployment: server provisioning, Docker, DNS &amp; production rollout."
              ghLink="https://www.manoalda.com/"
              demoLink="https://www.manoalda.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitabsolutepro}
              isBlog={false}
              title="FitAbsolutePro"
              description="Full-stack e-commerce built with React, Next.js, Node.js (Express), Redis and PostgreSQL."
              ghLink="https://github.com/cafrontadoe/fitabsoluteprofront"
              demoLink="https://fitabsoluteprofront-cafrontadoe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plenitude}
              isBlog={false}
              title="Plenitude"
              description="Web portal helping residents and visitors of Madeira learn about the church. Built in Angular 15 with a Node.js backend, integrated with Stripe for donations."
              ghLink="https://github.com/cafrontadoe/plenitude-site"
              demoLink="https://www.plenitudefunchal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cvu}
              isBlog={false}
              title="CVU — Travel Agency Portal"
              description="Web portal for a travel agency offering vacation plans with recurring online payments (PSE gateway), replacing a manual door-to-door cash collection process. Built with Angular 12, Liferay 7.1 and Java 8."
              ghLink="https://github.com/"
              demoLink="https://www.cvu.com.co/home"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
