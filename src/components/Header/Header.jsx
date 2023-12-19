import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = ({ isSticky, handleActiveNav, headerRef }) => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname === "/" ? "home" : location.pathname;
    handleActiveNav(pathname);
  }, [location]);

  return (
    <div ref={headerRef} className={`header-main ${isSticky ? "sticky" : ""}`}>
      <div className="header-main__textContainer">
        <div className="header-main__textContainer__text1">
          Dr. Letu Qingge Lab
        </div>
        <div className="header-main__textContainer__text2">
          Research Group at North Carolina A&T State University
        </div>
      </div>
      <div className="header-main__linksContainer">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          ABOUT
        </Link>
        <Link
          to="/news"
          className={
            location.pathname === "/news"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          NEWS
        </Link>
        <Link
          to="/research"
          className={
            location.pathname === "/research"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          RESEARCH
        </Link>
        <Link
          to="/publications"
          className={
            location.pathname === "/publications"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          PUBLICATIONS
        </Link>
        <Link
          to="/software"
          className={
            location.pathname === "/software"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          SOFTWARE
        </Link>
        <Link
          to="/teaching"
          className={
            location.pathname === "/teaching"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          TEACHING
        </Link>
        <Link
          to="/people"
          className={
            location.pathname === "/people"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          PEOPLE
        </Link>
        <Link
          to="/positions"
          className={
            location.pathname === "/positions"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          POSITIONS
        </Link>
      </div>
    </div>
  );
};

export default Header;
