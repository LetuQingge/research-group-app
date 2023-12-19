import React from "react";

const Publications = () => {
  return (
    <div
      style={{
        padding: "2rem 10rem",
        display: "flex",
        flexDirection: "column",
      }}
      id="Publications"
      //   ref={activeNav === "Publications" ? pageRef : null}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
        Publications
      </div>
      <ul>
        <li style={{ paddingBottom: "1rem" }}>
          <a href="https://scholar.google.com/citations?user=-D7jAYEAAAAJ&amp;hl=en&amp;oi=ao">
            My Google Scholar Page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Publications;
