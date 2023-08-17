import { useCallback, useEffect, useRef, useState } from "react";
import "./App.scss";
import bg from "./assets/images/bg1.jpg";
import HomePage from "./components/HomePage/HomePage";

const navList = [
  "Home",
  "Research",
  "Publications",
  "Software",
  "Teaching",
  "People",
  "About PI",
  "Positions",
];

function App() {
  // const scrollRef = useRef(null);
  const [activeNav, setActiveNav] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     // setScrollTop(window.scrollY);
  //     console.log("innn", window.scrollY);
  //     if (window.scrollY > 120) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const onScroll = useCallback((e) => {
  //   const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
  //   const scrollTop = e.currentTarget.scrollTop;
  //   console.log(
  //     `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
  //   );
  //   if (scrollTop > 100) {
  //     setIsScrolled(true);
  //   } else if (scrollTop <= 100) {
  //     setIsScrolled(false);
  //   }
  // }, []);
  // const onScroll = useCallback(
  //   (e) => {
  //     const scrollTop = e.currentTarget.scrollTop;
  //     console.log(`onScroll, myRef.scrollTop: ${scrollTop}`);

  //     // if (scrollTop > 100) {
  //     //   setIsScrolled(true);
  //     // } else if (scrollTop <= 100 && isScrolled) {
  //     //   setIsScrolled(false);
  //     // }
  //   },
  //   [isScrolled]
  // );

  return (
    <div
      // ref={scrollRef}
      // onScroll={onScroll}
      style={{ height: "100vh", width: "100%" }}
    >
      <HomePage />
    </div>
    // <div
    //   className="App"
    //   // onScrollCapture={(e) => {
    //   //   console.log(e.currentTarget);
    //   // }}
    //   onScroll={onScroll}
    //   ref={scrollRef}
    // >
    //   {/* <HomePage /> */}
    //   <div
    //     style={{
    //       backgroundImage: isScrolled ? "none" : `url(${bg})`,
    //       backgroundSize: "100% 234%",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "100% 68%",
    //       backgroundColor: "powderblue",
    //       backgroundColor: "#001A54",
    //       position: "fixed",
    //       top: "0",
    //       boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    //       width: "100%",
    //     }}
    //   >
    //     <div style={{ background: "rgb(0,0,0,0.5)" }}>
    //       <div
    //         style={{
    //           // background: "yellow",
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           // padding: "2rem 0",
    //           // padding: "3rem 1rem 1rem 1rem",
    //           height: isScrolled ? "8rem" : "18rem",
    //           position: "sticky",
    //           top: "-50px",
    //           transition: "all 0.5s ease-in",
    //         }}
    //       >
    //         <div
    //           style={{
    //             marginBottom: "0.2rem",
    //             fontSize: "2.2rem",
    //             // fontFamily: '"Playfair Display", serif',
    //             fontWeight: "bolder",
    //             color: "#fff",
    //           }}
    //         >
    //           Dr. Letu Qingge Group
    //         </div>
    //         <div style={{ fontWeight: 500, color: "#fff" }}>
    //           Research Group in Deep Learning at NCAT
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "space-around",
    //           borderTop: "1px solid rgb(255,255,255,0.2)",
    //           borderBottom: "1px solid rgb(255,255,255,0.2)",
    //           color: "#fff",
    //         }}
    //       >
    //         {navList.map((nav, i) => (
    //           <div
    //             key={i}
    //             className={nav === activeNav ? `hover active` : `hover `}
    //             onClick={() => setActiveNav(nav)}
    //           >
    //             {nav}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       marginTop: "22rem",
    //       padding: "0 10rem 2rem 10rem",
    //     }}
    //   >
    //     <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
    //       {activeNav}
    //     </div>
    //     <ul>
    //       {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
    //         <li key={i} style={{ paddingBottom: "1rem" }}>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer took a galley of
    //           type and scrambled it to make a type specimen book. It has
    //           survived not only five centuries, but also the leap into
    //           electronic typesetting, remaining essentially unchanged. It was
    //           popularised in the 1960s with the release of Letraset sheets
    //           containing Lorem Ipsum passages, and more recently with desktop
    //           publishing software like Aldus PageMaker including versions of
    //           Lorem Ipsum.
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default App;
