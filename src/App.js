import "./App.scss";
import Home from "./components/Home/Home";
import HomePage from "./components/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import bg from "./assets/images/bg3.jpeg";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Research from "./components/Research/Research";
import Publications from "./components/Publications/Publications";
import Software from "./components/Software/Software";
import Teaching from "./components/Teaching/Teaching";
import People from "./components/People/People";
import Positions from "./components/Positions/Positions";

function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 800) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleActiveNav = (nav) => {
    console.log("act nac=v", nav);
    setActiveNav(nav);
  };

  return (
    <Router>
      <div className="App">
        {activeNav === "home" && (
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${bg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              position: "fixed",
              overflow: "hidden",
              animation: "zoomInOut ease 8s infinite alternate",
            }}
            className="backgroundImage"
          ></div>
        )}
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: activeNav !== "home" ? "0%" : `calc(100% - 209.5px)`,
            backgroundImage: activeNav !== "home" ? `url(${bg})` : "none",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "0 0",
            // backgroundColor: "red",
            height: activeNav === "home" ? "auto" : "209.5px",
          }}
        >
          <Header
            isSticky={activeNav === "home" ? isSticky : true}
            handleActiveNav={handleActiveNav}
          />
        </div>
        <div
          style={{
            position: "relative",
            top: activeNav === "home" ? "100%" : "calc(100% - 76%)",
            background: "#fff",
            // padding: "1rem",
            borderTop: activeNav === "home" ? "1px solid lightgray" : "none",
          }}
        >
          <Routes>
            <Route exact path={"/"} element={<Home />}></Route>
            <Route exact path={"/news"} element={<News />}></Route>
            <Route exact path={"/research"} element={<Research />}></Route>
            <Route
              exact
              path={"/publications"}
              element={<Publications />}
            ></Route>
            <Route exact path={"/software"} element={<Software />}></Route>
            <Route exact path={"/teaching"} element={<Teaching />}></Route>
            <Route exact path={"/people"} element={<People />}></Route>
            <Route exact path={"/positions"} element={<Positions />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
