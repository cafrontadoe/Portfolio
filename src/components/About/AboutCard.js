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
            I’m a <span className="color-text">
              Senior Software Engineer
            </span>{" "}
            with a strong focus on{" "}
            <span className="color-text">Artificial Intelligence</span> and
            <span className="color-text"> Full-Stack Development</span>.
            <br />I specialize in building{" "}
            <span className="color-text">
              scalable, production-ready systems
            </span>{" "}
            that integrate{" "}
            <span className="color-text">
              LLMs, Retrieval-Augmented Generation (RAG),
            </span>{" "}
            and cloud-based AI solutions on{" "}
            <span className="color-text">AWS</span>.
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
