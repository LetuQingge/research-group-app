import React from "react";

const Software = () => {
  return (
    <div
      style={{
        padding: "2rem 10rem",
      }}
      id="Software"
      // ref={activeNav === "Software" ? pageRef : null}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
        Software
      </div>
      <ul>
        <li style={{ paddingBottom: "1rem" }}>
          Protein Scaffold Filler Software will release soon.
        </li>
      </ul>
    </div>
  );
};

export default Software;
