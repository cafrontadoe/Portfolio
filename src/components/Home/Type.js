import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Full-Stack Engineer & AI/ML Specialist",
          "Agentic AI Architect",
          "LLM Engineer and RAG Systems Builder"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
