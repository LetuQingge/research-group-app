import React from "react";
import "./Research.scss";

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
    <div className="research-main">
      <div className="research-main__title">Research</div>
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
