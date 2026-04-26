import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="color-text">Camilo Frontado</span>{" "}
            <br />
            I’m a{" "}
            <span className="color-text">
              Senior Full-Stack Engineer & AI/ML Specialist
            </span>{" "}
            currently working as{" "}
            <span className="color-text">AI System Architect at Manoa Tech</span>,
            with a{" "}
            <span className="color-text">
              Master’s in Artificial Intelligence from Universitat Politècnica
              de Catalunya
            </span>
            .
            <br />I design and ship{" "}
            <span className="color-text">
              scalable, production-ready AI systems
            </span>{" "}
            powered by{" "}
            <span className="color-text">
              Agentic AI, LLMs, Retrieval-Augmented Generation (RAG),
            </span>{" "}
            and cloud platforms like{" "}
            <span className="color-text">AWS &amp; Azure</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Entrepreneurship
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Weightlifting
            </li>
          </ul>

          <p style={{ color: "#a59b4b" }}>
            "Strive to build things that make a difference!"
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
