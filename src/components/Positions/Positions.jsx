import React from "react";

const Positions = () => {
  return (
    <div
      style={{
        padding: "2rem 10rem",
      }}
      id="Positions"
      //   ref={activeNav === "Positions" ? pageRef : null}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
        Positions
      </div>
      <ul>
        <li style={{ paddingBottom: "1rem" }}>
          Actively looking for self-motivated Ph.D. and Master students who are
          interested in the area of algorithms, machine learning, deep learning
          and has a strong Python/C++ programming skills and math background.
          The candidates with a BS or MS in computer science are preferrable.
          Industrial experience and many years of hands-on programming/software
          development are a plus. If you are interested, please reach out to me
          at lqingge at ncat dot com.
        </li>
      </ul>
    </div>
  );
};

export default Positions;
