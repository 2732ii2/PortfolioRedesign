
import { useState } from 'react';
import './App.css';
import "./Home.css";

import { AnimatePresence, motion } from 'framer-motion';
import {
  Fcircle,
  Header,
  MainDiv,Headings,
  FirstCopy,
  Focircle,
  Scircle,
  Second,
  Thcircle,
} from "./StyedComponents";
import Topdiv from './Topdiv';
import Education from './Education';

function App() {
  var list_=["Home","Education","Project","Contact"];
//   Age29
// ResidenceUSA
// AddressLos Angeles, USA
// e-mailemail@example.com
// Phone+0123 123 456 789
// FreelanceAvailable
var li_2 = [
  { name: "Age",value:21 },
  { name: "Residence",value:"India" },
  { name: "Address",value:"Agra,Up" },
  { name: "Email" ,value:"mo.anas123khan@gmail.com"},
  { name: "Phone",value:"73xxxxxxxx" },
  { name: "Available For" ,value:"Freelance, Contract, Full time"},
];
  var [state,setstates]=useState(0);
  function Eventhandler(e){
    var val=(e.target.innerText);
    e.target.style.transition="all .1s";
    val=="Home"?setstates(0):val=="Education"?setstates(1):val=="Project"?setstates(2):val=="Contact"?setstates(3):console.log("sorry");
  }
  return (
    <div className="App">
      {/* <Header  /> */}
      <FirstCopy>
        <Fcircle></Fcircle>
        <Focircle></Focircle>
        <Scircle></Scircle>
        <Thcircle></Thcircle>
      </FirstCopy>
      <Second>
        <Header>
          <div id="icon"> Ashad Mubeen</div>
          {list_.map((e, i) => {
            return (
              <Headings onClick={Eventhandler} id={i == state ? "spec" : ""}>
                {e}
              </Headings>
            );
          })}
        </Header>
        <AnimatePresence>
          <MainDiv id="maindiv">
            {state == 0 && (
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  borderBottom: "1px solid rgba(0,0,0,.1)",
                  boxShadow: "0 21px 42px -10px rgba(0,0,0,.3)",
                  // background: "rgba(0,0,0,.2)",
                }}
                initial={{
                  rotate: "180deg",
                  opacity: 0.2,
                  translateX: "-950px",
                  transformStyle: "preserve-3d",
                }}
                animate={{ rotate: "360deg", opacity: 1, translateX: "0px" }}
                exit={{ rotate: "0", scale: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <Topdiv />
                <div
                  style={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                    // border: "1px solid black",
                  }}
                >
                  <div
                    style={{
                      width: "47%",
                      height: "100%",
                      display: "flex",

                      // borderRight: "1px solid black",
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        height: "70%",
                        display: "flex",
                        margin: "auto",
                        marginTop: "16%",
                        flexDirection: "column",
                        background: "transparent",
                        // borderRight: "1px solid black",
                      }}
                    >
                      <h1
                        style={{ marginLeft: "5%", background: "transparent" }}
                      >
                        About{" "}
                        <span
                          style={{ color: "red", background: "transparent" }}
                        >
                          Me
                        </span>
                      </h1>
                      <p id="p_1">
                        A student who has a good knowledge of development using
                        React-JS and Node , and basic knowledge of cloud
                        computing (AWS Services ) , and great exposure to how to
                        make a project in which you have to consistently enhance
                        it? which helps me to understand that you have to
                        consistently learn the skills that help you grow as
                        well.
                      </p>
                      <a href="https://drive.google.com/file/d/1uziqeZ_4iufKmirIdV_x4g25oAFN1y-e/view" target='_blank'>
                        <motion.button
                          whileTap={{ scale: 1.2, rotate: "2.45deg" }}
                          style={{
                            width: "100px",
                            marginLeft: "5%",
                            marginTop: "3%",
                            height: "40px",
                            background: "white",
                            color: "black",
                            borderRadius: "4px",
                          }}
                        >
                          Download
                        </motion.button>
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "53%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      // paddingLeft:"0%",
                      justifyContent: "space-evenly",
                      // borderRight: "1px solid black",
                    }}
                  >
                    {li_2.map((e, i) => {
                      return (
                        <div id="leftbottom" key={i}>
                          <div
                            style={{
                              textAlign: "start",
                              width: "70%",
                              background: "transparent",
                            }}
                          >
                            {e.name}
                          </div>
                          <div
                            style={{
                              textAlign: "start",
                              width: "70%",
                              background: "transparent",
                            }}
                          >
                            {e.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
            {state == 1 && (
              <motion.div
                id='upperedu'
                initial={{
                  translateY: "-400px",
                  rotateX: "135deg",
                  transformStyle: "preserve-3d",
                  translateZ: "40px",
                }}
                animate={{
                  translateY: "0px",
                  rotateX: "0deg",
                  transformStyle: "preserve-3d",
                  translateZ: "0px",
                }}
                exit={{ rotate: "0", scale: 0 }}
                transition={{ duration: 2, type: "spring" }}
              >
                <Education />
              </motion.div>
            )}
            {state == 2 && (
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  background: "orange",
                }}
                initial={{
                  // rotate: "180deg",
                  translateX: "950px",
                  transformStyle: "preserve-3d",
                }}
                animate={{ rotate: "0deg", translateX: "0px" }}
                // initial={{ translateY: "-400px" }}
                // animate={{ translateY: "0px" }}
                exit={{ rotate: "0", scale: 0 }}
                transition={{ duration: 1, type: "spring" }}
              ></motion.div>
            )}
            {state == 3 && (
              <motion.div
                style={{
                  width: "100%",
                  position: "absolute",
                  height: "100%",
                  background: "black",
                }}
                initial={{
                  translateY: "900px",
                  transformStyle: "preserve-3d",
                }}
                animate={{ translateY: "0px", transformStyle: "preserve-3d" }}
                exit={{ rotate: "0", scale: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              ></motion.div>
            )}
          </MainDiv>
        </AnimatePresence>
      </Second>
    </div>
  );
}

export default App;
