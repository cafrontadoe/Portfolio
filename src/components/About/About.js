import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import azureCertification from "../../Assets/azure-administrator.png";
import awsCertifications from "../../Assets/aws_certification.png";
import scrumCertifications from "../../Assets/scrum_certification.png";
import javaCertifications from "../../Assets/java_certification.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="color-text">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Row>
              <Col>
                <div className="image-stack">
                  <img src={azureCertification} alt="Azure administrator Certification" className="drop drop-2" />
                  <img
                    src={awsCertifications}
                    alt="Aws machine learning certification"
                    className=" drop drop-1"
                  />
                </div>
              </Col>
              <Col>
                <div className="image-stack">
                  <img src={javaCertifications} alt="Java Certification" className="drop drop-4" />
                  <img
                    src={scrumCertifications}
                    alt="Scrum Master Certification"
                    className=" drop drop-3"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="color-text">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="color-text">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
