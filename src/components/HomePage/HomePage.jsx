import React, { useCallback, useEffect, useRef, useState } from "react";
import bg from "../../assets/images/bg1.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import "./HomePage.scss";
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  alpha,
  styled,
} from "@mui/material";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Cancel,
  CancelOutlined,
  Close,
} from "@mui/icons-material";
import defaultProfile from "../../assets/images/defaultProfile.png";
import profile1 from "../../assets/images/profile1.jpg";
import profile2 from "../../assets/images/profile2.jpg";

const menuItem = [
  "Home",
  "News",
  "Research",
  "Publications",
  "Software",
  "Teaching",
  "People",
  "About PI",
  "Positions",
];

const publications = [
  {
    title:
      "A Novel Weight Dropout Approach to Accelerate the Neural Network Controller Embedded Implementation on FPGA for a Solar Inverter",
    publishers: "J Sturtz, X Fu, CD Hingu, L Qingge",
    descriptions:
      "2023 IEEE International Conference on Smart Computing (SMARTCOMP), 157-163",
    year: 2023,
  },
  {
    title: "An improved Otsu threshold segmentation algorithm",
    publishers: "P Yang, W Song, X Zhao, R Zheng, L Qingge",
    descriptions:
      "International Journal of Computational Science and Engineering 22 (1), 146-153",
    year: 2020,
  },
  {
    title:
      "Robust 2D otsu’s algorithm for uneven illumination image segmentation",
    publishers: "J Xing, P Yang, L Qingge",
    descriptions: "Computational Intelligence and Neuroscience 2020",
    year: 2020,
  },
  {
    title:
      "Robust optimization for the hazardous materials transportation network design problem",
    publishers: "C Xin, L Qingge, J Wang, B Zhu",
    descriptions: "Journal of Combinatorial Optimization 30, 320-334",
    year: 2015,
  },
  {
    title:
      "Robust optimization for the hazardous materials transportation network design problem",
    publishers: "C Xin, Q Letu, Y Bai",
    descriptions:
      "Combinatorial Optimization and Applications: 7th International Conference",
    year: 2013,
  },
];

const teachings = [
  "COMP 496 Senior Project II, Fall 2023",
  "COMP 496 Senior Project II, Fall 2023",
  "COMP 385 Theory of Computing, Fall 2023",
  "COMP 841 Deep Learning, Spring 2023",
  "COMP 385 Theory of Computing, Fall 2022",
  "COMP 496 Senior Project II, Fall 2022",
  "COMP 496 Senior Project II, Spring 2022",
  "COMP 285 Analysis of Algorithms, Fall 2021",
  "COMP 496 Senior Project II, Fall 2021",
  "COMP 841 Deep Learning, Spring 2021",
  "COMP 496 Senior Project II, Spring 2021",
  "COMP 496 Senior Project II, Fall 2020",
];

const people = [
  {
    name: "Mr. Richard Kofi Annan",
    qualification: "PhD student at NCAT",
    description: `Richard Kofi Annan is a PhD student at the Department of Computer Science 
    at North Carolina A&T State University. His research focuses on using deep learning techniques
     for genetic predictions. He is also a certified Project Management Professional (PMP) with 
     experience in end-to-end management of projects both in academia and industry.`,
    img: "",
  },
  {
    name: "Mr. Wendell Futrell",
    qualification: "PhD student at NCAT",
    description: ``,
    img: "",
  },
  {
    name: "Mr. Jordan Sturtz",
    qualification: "MS student at NCAT, Graduated in May 2023",
    description: `Jordan Sturtz is a graduate student at NCA&T in the Masters of Computer Science program,
     with a focus in artificial intelligence, machine learning, and data science. His current research 
     focuses on developing deep learning models and algorithms to solve problems in biomedicine, in particular 
     protein and genome sequence prediction and classification. He is also a full-time software developer with 
     three years of experience using Python, C/C++, Qt, PostgreSQL, and other languages.`,
    img: "",
  },
  {
    name: "Ms. Alexis Cathcart",
    qualification: "MS student at NCAT",
    description: `Alexis Cathcart is an incoming Master's student from Charlotte, NC. She will complete her 
    Bachelor's in Computer Science at North Carolina A&T State University in May 2023. Her research interests 
    include artificial intelligence, machine learning, data science, and bioinformatics. `,
    img: profile1,
  },
  {
    name: "Mr. Nicholas Rader",
    qualification: "MS student at NCAT",
    description: `Nick Rader is a full-time graduate student at North Carolina A&T. He is also a part-time search 
    ad evaluator at Appen. He is an aspiring Application/Web Developer in Kernersville, NC. He is passionate about 
    UI/UX design, graphics, and creating responsive and interactive apps for all users to enjoy worldwide! He graduated 
    in 2022 from High Point University with a bachelor of science in computer science. `,
    img: profile2,
  },
  {
    name: "Mr. Justin Noland",
    qualification: "MS student at NCAT",
    description: `Justin Noland is a Master's computer scientist at North Carolina A&T State University concentrating in 
    Cyber Security. Justin is currently doing research on cybersecurity techniques on genomic data and is pursuing careers
     related to pen-testing and vulnerability/exploitation assessment and analysis.`,
    img: "",
  },
];

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
  description: `Dr. Letu Qingge, Ph.D, is an assistant professor in the Department of Computer Science
   at North Carolina A&T State University, NC. He received his Ph.D degree in Computer Science 
   from Montana State University, MT, USA in 2018.`,
  img: "",
};

const StyledMenu = styled((props) => (
  <Menu
    disableScrollLock={true}
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: "12rem",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "#fff",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
      color: "#fff",
    },
    "& .MuiMenuItem-root": {
      "&:active": {
        background: "#fff",
        color: "#000",
      },
    },
  },
}));

const HomePage = () => {
  const pageRef = useRef(null);
  const [isRotate, setIsRotate] = useState(false);
  const [changeMenuIcon, setChangeMenuIcon] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeNav, setActiveNav] = useState("Home");
  const open = Boolean(anchorEl);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (pageRef?.current) {
      pageRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, [activeNav]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsRotate(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setChangeMenuIcon(!changeMenuIcon);
    }, 600);
  }, [isRotate]);

  return (
    <div
      ref={scrollRef}
      onScroll={(e) => {
        console.log(e);
      }}
      style={{ position: "relative" }}
    >
      <ArrowCircleUp
        htmlColor="rgba(0,0,0,0.8)"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          fontSize: "2rem",
          margin: "0.8rem",
          cursor: "pointer",
        }}
        onClick={() => setActiveNav("Home")}
      />
      <div
        id="Home"
        ref={activeNav === "Home" ? pageRef : null}
        className="homePage-main"
        style={{
          height: "100vh",
          flex: 1,
          display: "flex",
          backgroundImage: `url(${bg})`,
          backgroundSize: "auto 120vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          justifyContent: "center",
          alignItems: "center",
          animation: "zoomInOut ease 8s infinite alternate",
          position: "relative",
        }}
      >
        <ArrowCircleDown
          htmlColor="rgba(255,255,255,0.4)"
          style={{
            position: "absolute",
            bottom: "20px",
            fontSize: "2rem",
            animation: "scrollDownIndicator ease 1s infinite",
          }}
        />
        <div
          style={{
            textAlign: "center",
            animation: "fadeIn ease 10s",
            animationFillMode: "forwards",
          }}
        >
          <div
            style={{
              fontSize: "4.5rem",
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
            Research Group in AI at NCAT
          </div>
        </div>
        <IconButton
          id="basic-button"
          style={{
            zIndex: 9999,
            position: "fixed",
            top: 0,
            right: 0,
            margin: "0.8rem",
            animation: isRotate
              ? "rotateRight ease 0.5s"
              : "rotateLeft ease 0.5s",
            animationFillMode: "forwards",
            backgroundColor: "rgba(0,0,0,0.5)",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px !important",
          }}
          onClick={(e) => {
            setIsRotate(!isRotate);

            changeMenuIcon ? handleClick(e) : handleClose();
          }}
        >
          {changeMenuIcon || changeMenuIcon === null ? (
            <MenuIcon htmlColor="#fff" style={{ fontSize: "1.2rem" }} />
          ) : (
            <Close htmlColor="#fff" style={{ fontSize: "1.2rem" }} />
          )}
        </IconButton>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {menuItem?.map((item, i) => (
            <MenuItem
              key={i}
              selected={item === activeNav}
              onClick={() => {
                handleClose();
                setActiveNav(item);
              }}
              href={item}
            >
              {item}
            </MenuItem>
          ))}
        </StyledMenu>
      </div>
      <div
        style={{
          padding: "2rem 10rem",
        }}
        id="News"
        ref={activeNav === "News" ? pageRef : null}
      >
        <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
          News
        </div>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              key={i}
              style={{
                paddingBottom: "1rem",
              }}
            >
              Our paper titled "A Convolutional Denoising Autoencoder for Protein Scaffold Filling" is accepted by 19th International Symposium on Bioinformatics Research and Applications (ISBRA 2023), August 2023.
              Congrats to my graduate students Jordan Sturtz and Richard Annan!
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          padding: "2rem 10rem",
        }}
        id="Research"
        ref={activeNav === "Research" ? pageRef : null}
      >
        <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
          Research
        </div>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} style={{ paddingBottom: "1rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          padding: "2rem 10rem",
          display: "flex",
          flexDirection: "column",
        }}
        id="Publications"
        ref={activeNav === "Publications" ? pageRef : null}
      >
        <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
          Publications
        </div>
        {publications.map((item, i) => (
          <div
            key={i}
            style={{
              margin: "1rem 0 2rem 0",
              padding: "1.5rem",
              backgroundColor: i % 2 === 0 ? "lightblue" : "antiquewhite",
              borderRadius: "20px",
              fontSize: "1.1rem",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              maxWidth: "50rem",
              minWidth: "50rem",
              display: "flex",
              flexDirection: "column",
              alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
            }}
          >
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
              <span>{item.title}</span>
              <span
                style={{
                  padding: "0rem 1rem",
                  backgroundColor: i % 2 !== 0 ? "lightblue" : "antiquewhite",
                  borderRadius: "4px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  fontSize: "1rem",
                }}
              >
                {item.year}
              </span>
            </div>
            <div>{item.publishers}</div>
            <div>{item.descriptions}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "2rem 10rem",
        }}
        id="Software"
        ref={activeNav === "Software" ? pageRef : null}
      >
        <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
          Software
        </div>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} style={{ paddingBottom: "1rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          padding: "2rem 10rem",
          display: "flex",
          flexDirection: "column",
        }}
        id="Teaching"
        ref={activeNav === "Teaching" ? pageRef : null}
      >
        <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
          Teaching
        </div>
        <div
          style={{
            margin: "1rem 0 2rem 0",
          }}
        >
          {teachings.map((item, i) => (
            <div
              key={i}
              style={{
                margin: "1rem 1rem 2rem 1rem",
                padding: "1rem",
                backgroundColor: "antiquewhite",
                borderRadius: "20px",
                fontSize: "1.1rem",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                display: "flex",
                flexDirection: "row",
                fontWeight: "500",
                fontSize: "1.1rem",
                width: "fit-content",
              }}
            >
              {item.split(",")[0]}{" "}
              <span
                style={{
                  marginLeft: "2rem",
                  padding: "0rem 1rem",
                  backgroundColor: "lightblue",
                  borderRadius: "4px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  fontSize: "1rem",
                }}
              >
                {item.split(",")[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          padding: "2rem 10rem",
        }}
        id="People"
        ref={activeNav === "People" ? pageRef : null}
      >
        <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
          People
        </div>
        {people.map((item, i) => (
          <div
            key={i}
            style={{
              margin: "1rem 0 2rem 0",
              padding: "1.5rem",
              backgroundColor: i % 2 === 0 ? "lightblue" : "antiquewhite",
              borderRadius: "20px",
              fontSize: "1.1rem",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                height: "10rem",
                width: "10rem",
                marginRight: "1.5rem",
              }}
            >
              <img
                src={item?.img ? item?.img : defaultProfile}
                style={{ height: "10rem", borderRadius: "4px" }}
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
                  marginBottom: "0.5rem",
                }}
              >
                <span>{item.name}</span>
                <span
                  style={{
                    padding: "0.2rem 1rem",
                    backgroundColor: i % 2 !== 0 ? "lightblue" : "antiquewhite",
                    borderRadius: "4px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.qualification}
                </span>
              </div>
              <div>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "2rem 10rem",
        }}
        id="About PI"
        ref={activeNav === "About PI" ? pageRef : null}
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
              <span style={{ fontWeight: "bold" }}>Education: </span>
              {aboutPI.education}
            </div>
            <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
              <span style={{ fontWeight: "bold" }}>About: </span>
              {aboutPI.description}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "2rem 10rem",
        }}
        id="Positions"
        ref={activeNav === "Positions" ? pageRef : null}
      >
        <div style={{ fontSize: "1.8rem", fontWeight: "bold", padding: "0" }}>
          Positions
        </div>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} style={{ paddingBottom: "1rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
