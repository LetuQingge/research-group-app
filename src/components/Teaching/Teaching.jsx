import React from "react";

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
    <div
      style={{
        padding: "2rem 10rem",
        display: "flex",
        flexDirection: "column",
      }}
      id="Teaching"
      // ref={activeNav === "Teaching" ? pageRef : null}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
        Teaching
      </div>
      <div
        style={{
          margin: "1rem 0 2rem 0",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {teachings.map((item, i) => (
          <div
            key={i}
            style={{
              margin: "1rem 1rem 2rem 1rem",
              padding: "1rem",
              backgroundColor: "antiquewhite",
              borderRadius: "20px",
              fontSize: "1.1rem",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              display: "flex",
              flexDirection: "row",
              fontWeight: "500",
              fontSize: "1.1rem",
              width: "fit-content",
            }}
          >
            {item.split(",")[0]}{" "}
            <span
              style={{
                marginLeft: "2rem",
                padding: "0rem 1rem",
                backgroundColor: "lightblue",
                borderRadius: "4px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontSize: "1rem",
              }}
            >
              {item.split(",")[1]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teaching;
