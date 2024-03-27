import React from "react";
import "./Publications.scss";

const Publications = () => {
  return (
    <div className="publications-main">
      <div className="publications-main__title">Publications</div>
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
