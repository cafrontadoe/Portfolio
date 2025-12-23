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
              I’m a software engineer who transitioned into Artificial
              Intelligence, driven by a passion for building intelligent,
              scalable, and real-world products 🚀
              <br />
              <br />I specialize in
              <i>
                <b className="color-text">
                &nbsp;Artificial Intelligence, Data Science, and Full-Stack
                  Development
                </b>
              </i>
              , with a strong focus on
              <i>
                <b className="color-text">
                &nbsp;Large Language Models (LLM), Retrieval-Augmented Generation
                  (RAG), and LLMOps 
                </b>
              </i>
              &nbsp;on
              <i>
                <b className="color-text"> AWS</b>
              </i>
              .
              <br />
              <br />
              My main stack includes
              <i>
                <b className="color-text">
                &nbsp;Python (Machine Learning, NLP, Model Evaluation), TensorFlow,
                  PyTorch, and Scikit-Learn
                </b>
              </i>
              , combined with solid experience in
              <i>
                <b className="color-text">
                &nbsp;data engineering, feature pipelines, and cloud-based ML
                  workflows
                </b>
              </i>
              .
              <br />
              <br />I also bring strong
              <i>
                <b className="color-text">&nbsp;Full-Stack expertise</b>
              </i>
              , building production-ready applications with
              <i>
                <b className="color-text">
                &nbsp; Angular, React, Next.js, Node.js, Java (Spring),
                </b>
              </i>
              &nbsp; and modern DevOps practices, turning AI models into
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
