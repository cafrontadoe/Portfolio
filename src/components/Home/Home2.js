import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/camilo_carro.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="color-text"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Senior Software Engineer with 10+ years of experience who
              expanded into Artificial Intelligence, holding a&nbsp;
              <i>
                <b className="color-text">
                  Master’s in Artificial Intelligence from Universitat
                  Politècnica de Catalunya
                </b>
              </i>
              &nbsp;and shipping production AI systems for real customers 🚀
              <br />
              <br />I specialize in
              <i>
                <b className="color-text">
                &nbsp;Agentic AI, Large Language Models (LLMs), Retrieval-Augmented
                  Generation (RAG), and LLMOps
                </b>
              </i>
              , architecting end-to-end solutions on
              <i>
                <b className="color-text"> AWS and Azure</b>
              </i>
              .
              <br />
              <br />
              My AI stack includes
              <i>
                <b className="color-text">
                &nbsp;Python, TensorFlow, PyTorch, Scikit-Learn, LangChain, n8n,
                  and the MCP protocol
                </b>
              </i>
              , combined with deep
              <i>
                <b className="color-text">
                &nbsp;Full-Stack expertise
                </b>
              </i>
              &nbsp;in
              <i>
                <b className="color-text">
                &nbsp;Java (Spring Boot, Quarkus), Node.js, Angular, React, and
                  Next.js
                </b>
              </i>
              &nbsp;— turning AI models into
              <i>
                <b className="color-text"> real, deployable products</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid-home2" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="color-text">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cafrontadoe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/camilo-andres-frontado-escobar-msc-791215170/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
