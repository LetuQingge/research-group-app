import React from "react";
import "./Home.scss";
import defaultProfile from "../../assets/images/defaultProfile.png";
import PIImage from "../../assets/images/PI_Image.jpg";
// import profile2 from "../../assets/images/profile2.jpg";

const aboutPI = {
  name: "Dr. Letu Qingge",
  designation: "Assistant Professor",
  department: "Department of Computer Science",
  college: "North Carolina A&T State University",
  education: `Ph.D.
    Computer Science / Montana State University
    M.S.
    Management Science and Engineering / Beijing University of Chemical Technology
    B.S.
    Information and Computer Science / Inner Mongolia University
    `,
  description: `Dr. Letu Qingge, Ph.D, is an assistant professor in the Department of 
                Computer Science at North Carolina A&T State University, NC. He received his Ph.D 
                degree in Computer Science from Montana State University, MT, USA. His research 
                interests include algorithms, machine learning, deep learning, cloud computing, 
                combinatorial optimization, bioinformatics and computational biology, computer vision, 
                transportation network, and neural network control. His research has been funded by NSF and NIH.`,
  img: PIImage,
};

const Home = () => {
  return (
    <div
      style={{
        padding: "2rem 10rem",
      }}
      id="About PI"
      //   ref={activeNav === "About PI" ? pageRef : null}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
        About PI
      </div>
      <div
        style={{
          margin: "1rem 0 2rem 0",
          padding: "1.5rem",
          backgroundColor: "lightblue",
          borderRadius: "20px",
          fontSize: "1.1rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "15rem",
            width: "15rem",
            marginRight: "1.5rem",
          }}
        >
          <img
            src={aboutPI?.img ? aboutPI?.img : defaultProfile}
            style={{ height: "15rem", borderRadius: "4px" }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "1.6rem", color: "#000" }}>
              {aboutPI.name}
            </span>
            <span
              style={{
                padding: "0.2rem 1rem",
                backgroundColor: "antiquewhite",
                borderRadius: "4px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontSize: "0.9rem",
              }}
            >
              {aboutPI.designation}
            </span>
          </div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.college}</div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.department}</div>
          <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
            <span style={{ fontWeight: "bold" }}>About: </span>
            {aboutPI.description}
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "1rem 0 2rem 0",
          padding: "1.5rem",
          backgroundColor: "lightblue",
          borderRadius: "20px",
          fontSize: "1.1rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "15rem",
            width: "15rem",
            marginRight: "1.5rem",
          }}
        >
          <img
            src={aboutPI?.img ? aboutPI?.img : defaultProfile}
            style={{ height: "15rem", borderRadius: "4px" }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "1.6rem", color: "#000" }}>
              {aboutPI.name}
            </span>
            <span
              style={{
                padding: "0.2rem 1rem",
                backgroundColor: "antiquewhite",
                borderRadius: "4px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontSize: "0.9rem",
              }}
            >
              {aboutPI.designation}
            </span>
          </div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.college}</div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.department}</div>
          <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
            <span style={{ fontWeight: "bold" }}>About: </span>
            {aboutPI.description}
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "1rem 0 2rem 0",
          padding: "1.5rem",
          backgroundColor: "lightblue",
          borderRadius: "20px",
          fontSize: "1.1rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "15rem",
            width: "15rem",
            marginRight: "1.5rem",
          }}
        >
          <img
            src={aboutPI?.img ? aboutPI?.img : defaultProfile}
            style={{ height: "15rem", borderRadius: "4px" }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "1.6rem", color: "#000" }}>
              {aboutPI.name}
            </span>
            <span
              style={{
                padding: "0.2rem 1rem",
                backgroundColor: "antiquewhite",
                borderRadius: "4px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontSize: "0.9rem",
              }}
            >
              {aboutPI.designation}
            </span>
          </div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.college}</div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.department}</div>
          <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
            <span style={{ fontWeight: "bold" }}>About: </span>
            {aboutPI.description}
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "1rem 0 2rem 0",
          padding: "1.5rem",
          backgroundColor: "lightblue",
          borderRadius: "20px",
          fontSize: "1.1rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "15rem",
            width: "15rem",
            marginRight: "1.5rem",
          }}
        >
          <img
            src={aboutPI?.img ? aboutPI?.img : defaultProfile}
            style={{ height: "15rem", borderRadius: "4px" }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "1.6rem", color: "#000" }}>
              {aboutPI.name}
            </span>
            <span
              style={{
                padding: "0.2rem 1rem",
                backgroundColor: "antiquewhite",
                borderRadius: "4px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontSize: "0.9rem",
              }}
            >
              {aboutPI.designation}
            </span>
          </div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.college}</div>
          <div style={{ fontSize: "1rem" }}>{aboutPI.department}</div>
          <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
            <span style={{ fontWeight: "bold" }}>About: </span>
            {aboutPI.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
