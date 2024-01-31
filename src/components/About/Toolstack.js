import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiIntellijidea,
  SiJasmine,
  SiSonarqube,
  SiConfluence,
  SiJira,
  SiAwslambda
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <SiJasmine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
      </Col>
    </Row>
  );
}

export default Toolstack;
