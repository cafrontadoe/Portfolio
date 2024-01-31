import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cvu from "../../Assets/Projects/cvu.PNG";
import plenitude from "../../Assets/Projects/plenitude.PNG";
import fitabsolutepro from "../../Assets/Projects/fitabsolutepro.PNG";
import chat from "../../Assets/Projects/chatAssistant.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitabsolutepro}
              isBlog={false}
              title="FitAbsolutePro"
              description="FitAbsolute Pro is an ecommerce build in React, Next Js, using bakend in node JS Express, Redis and PostgreSQL."
              ghLink="https://github.com/cafrontadoe/fitabsoluteprofront"
              demoLink="https://fitabsoluteprofront-cafrontadoe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plenitude}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Plenitude Site is a portal web that helps residents and visitors of madeira to know about the church, it's build in Angular 15 and backend in Node JS, integrate with Stripe for donations."
              ghLink="https://github.com/cafrontadoe/plenitude-site"
              demoLink="https://www.plenitudefunchal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cvu}
              isBlog={false}
              title="CVU"
              description="CVU Portal Web is a portal for a travel agency when they offer all their plans, clients can make a registration and start doing payments programmatically. It's build with Angular 12, Liferay and Java 8."
              ghLink="https://github.com/"
              demoLink="https://www.cvu.com.co/home"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat with GPT"
              description="It's a template chat Connected with GPT Assistant with Node SDK, it is build with Angular 16 in Frontend and Node JS Express in Backend"
              ghLink="https://github.com/cafrontadoe/assistantBack"
              demoLink="https://github.com/cafrontadoe/assistantBack"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
