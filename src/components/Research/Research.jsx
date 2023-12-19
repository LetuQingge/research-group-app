import React from "react";

const research = [
  "Algorithms and Combinatorial Optimization",
  "Machine Learning and Deep Learning",
  "Bioinformatics and Computational Biology",
  "Computer Vision, Image Processing",
  "Cloud Computing",
  "Neural Network Control",
  "Transportation Network, Smart Transportation",
];

const Research = () => {
  return (
    <div
      style={{
        padding: "2rem 10rem",
      }}
      id="Research"
      // ref={activeNav === "Research" ? pageRef : null}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
        Research
      </div>
      <ul>
        {research.map((item, i) => (
          <li key={i} style={{ paddingBottom: "1rem" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Research;
