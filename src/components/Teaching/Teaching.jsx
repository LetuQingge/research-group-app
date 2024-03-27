import React from "react";
import "./Teaching.scss";

const teachings = [
  "COMP 496 Senior Project II, Fall 2023",
  "COMP 385 Theory of Computing, Fall 2023",
  "COMP 841 Deep Learning, Spring 2023",
  "COMP 385 Theory of Computing, Fall 2022",
  "COMP 496 Senior Project II, Fall 2022",
  "COMP 496 Senior Project II, Spring 2022",
  "COMP 841 Deap Learning, Spring 2022",
  "COMP 285 Analysis of Algorithms, Fall 2021",
  "COMP 496 Senior Project II, Fall 2021",
  "COMP 841 Deep Learning, Spring 2021",
  "COMP 496 Senior Project II, Spring 2021",
  "COMP 496 Senior Project II, Fall 2020",
];

const Teaching = () => {
  return (
    <div className="teaching-main">
      <div className="teaching-main__title">Teaching</div>
      <div className="teaching-main__container">
        {teachings.map((item, i) => (
          <div key={i} className="teaching-main__container__card">
            {item.split(",")[0]}{" "}
            <span className="teaching-main__container__card__text">
              {item.split(",")[1]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teaching;
