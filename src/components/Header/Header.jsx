import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = ({ isSticky, handleActiveNav }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    const pathname = location.pathname === "/" ? "home" : location.pathname;
    handleActiveNav(pathname);
  }, [location]);

  return (
    <div className={`sticky-header ${isSticky ? "sticky" : ""}`}>
      <div
        style={{
          textAlign: "center",
          animation: "fadeIn ease 10s",
          animationFillMode: "forwards",
          width: "100%",
          padding: "1rem 0",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            fontSize: "3.4rem",
            fontWeight: "bolder",
            color: "#fff",
            animation: "leftToRight ease 5s",
            animationFillMode: "forwards",
          }}
        >
          Dr. Letu Qingge Lab
        </div>
        <div
          style={{
            fontWeight: 500,
            color: "#fff",
            animation: "rightToLeft ease 5s",
            animationFillMode: "forwards",
          }}
        >
          Research Group at North Carolina A&T State University
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          zIndex: 1,
          width: "100%",
          padding: "1rem 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          fontSize: "1rem",
          textDecoration: "none !important",
          fontWeight: "600",
          backgroundColor: "#fff",
        }}
      >
        <Link to="/" className="link">
          ABOUT
        </Link>
        <Link to="/news" className="link">
          NEWS
        </Link>
        <Link to="/research" className="link">
          RESEARCH
        </Link>
        <Link to="/publications" className="link">
          PUBLICATIONS
        </Link>
        <Link to="/software" className="link">
          SOFTWARE
        </Link>
        <Link to="/teaching" className="link">
          TEACHING
        </Link>
        <Link to="/people" className="link">
          PEOPLE
        </Link>
        <Link to="/positions" className="link">
          POSITIONS
        </Link>
      </div>
    </div>
  );
};

export default Header;
