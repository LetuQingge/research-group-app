import React from "react";
import bg from "../assets/images/bg2.jpg";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
        display: "flex",
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 120%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 55%",
      }}
    >
      {/* HomePage */}
      <div
        style={{
          background: "rgba(0,0,0,0.25)",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            // background: "yellow",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            //   justifyContent: "center",
            padding: "0.5rem 0",
            // height: "100%",
            // width: "100%",
            // flex: 1,
            textAlign: "center",
          }}
        >
          <div
            style={{
              //   marginBottom: "0.2rem",
              fontSize: "2.2rem",
              //   fontFamily: '"Playfair Display", serif',
              fontWeight: "bolder",
              color: "#fff",
              //   paddingTop: "1rem",
            }}
          >
            Dr. Letu Qingge Group
          </div>
          <div style={{ fontWeight: 500, color: "#000" }}>
            Research Group in Deep Learning at NCAT
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
