import { MotionConfig, animate, inView, useInView, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import "./Home.css";
var Educ = styled.div`
    width: 99%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    backdrop-filter:blur(20px);
    // border:2px solid black;
    background: transparent;
`;
var Edtop = styled.div`
  background: rgba(255, 0, 0, 0.2);
  width: 100%;
  min-height:150px;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow: hidden;
  // border:1px solid black;
`;
var H_3=styled.h3`
    background:transparent;
    font-size:52px;
    letter-spacing:3px;
    color:white;
`;

var Firstpart = styled.div`
  // background: rgba(255, 0, 0, 0.2);
  width: 50%;
  height:700px;
  border-bottom:1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  // border:1px solid black;
  display:flex;
  justify-content:center;
  align-items:center;
`;
var Secondpart = styled.div`
  // background: rgba(255, 0, 0, 0.2);
  width: 50%;
  height: 700px;
  // border: 1px solid red;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var MainFirst = styled.div`
  // background: rgba(255, 0, 0, 0.2);
  width: 70%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  padding-top: 30px;
  padding-bottom: 30px;
`;
var InnerComp = styled.div`
  // background: rgba(255, 0, 0, 0.2);
  width: 80%;
  height: 100%;
  // margin-left: 10%;
  display: flex;
  padding-left: 10px;
  // padding-top: 10px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  box-shadow: 6px 11px 15px -7px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid rgba(255, 0, 0, 0.3);
`;
var Li = styled.p`
  padding-left: 2px;
  width: 90%;
  // border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom:2px;
  // text-align:right;
`;
var Dot = styled.div`

  width: 15px;
  height: 15px;
  border:3px solid rgba(255,0,0,.6);
  background:white;
  border-radius: 50%;
  position: absolute;
  margin-left:-100%;
`;
// var INsideLast = styled.div`
 
// `;
export default function Education() {
  var ref = useRef(null);
  var view=useInView(ref);
  var list_3 = [
    { name: "React-JS", percentage: 75 },
    { name: "Javascript", percentage: 85 },
    { name: "Node-JS", percentage: 55 },
    { name: "Mongo-DB", percentage: 55 },
    { name: "Python Programming", percentage: 80 },
    { name: "Html & Css", percentage: 70 },
    { name: "Aws Servives", percentage: 25 },
  ];

  var li_es = [
    {
      name: "B-Tech in Computer Science ",
      Completingyear: "2024",
      towhichpursed: "GLA University",
      // perc:"7.01"
    },
    {
      name: "Intermediate ( PCM  ) ",
      Completingyear: "2020",
      towhichpursed: "Gayatri Public School",
      // perc:"73.6"
    },
    {
      name: "Secondary school (10th)",
      Completingyear: "2018",
      towhichpursed: "All saints public School",
    },
  ];
  var li_es_2 = [
    {
      name: " Internship or Traning Program",
      Completingyear: "2022",
      towhichpursed: "GLA University",
      Points: [
        {
          val: "We worked on Javascript concepts and learned how to make responsive websites using Flex and grid layout and Crud applications using Firebase databases",
        },
        {
          val: "Final Project : Songify a web application for Listening Music.",
        },
      ],
    },
    {
      name: "Contributions in Frontend Project ",
      Completingyear: "2023",
      towhichpursed: "With LCX Software Enginner",
      Points: [
        {
          val: "Daily Basis Tasks given to me to solve or fix the overflowing of screen resolution.",
        },
        {
          val: "Making or Adding Transition to project using Html and Css basic transitions, which help me to learn Agile method",
        },
      ],
      // perc:"73.6"
    },
    {
      name: "Contributions in Frontend Project ",
      Completingyear: "2023",
      towhichpursed: "With LCX Software Enginner",
      // perc:"73.6"
    },
  ];
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, 100);
    return controls.stop;
     console.log("viewed or not => ",view);
  }, [view]);
  return (
    <MotionConfig styles={{ background: "transparent" }}>
      <Educ>
        <Edtop>
          <H_3>Education</H_3>
        </Edtop>
        <div
          style={{
            width: "100%",
            minHeight: "700px",
            background: "white",
            display: "flex",
            // border: "1px solid black",
          }}
        >
          <Firstpart>
            <MainFirst>
              {li_es.map((e, i) => {
                return (
                  <motion.div
                    style={{ width: "82%", height: "22%", display: "flex" }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div
                      style={{
                        width: "12%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        // border: "1px solid black",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "5%",
                          background: "rgba(255,0,0,.2)",
                          borderRadius: "0px",
                        }}
                      ></div>
                      <Dot></Dot>
                    </div>
                    <InnerComp key={i}>
                      <h5
                        style={{
                          marginTop: "4%",
                          fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        {e.name}
                      </h5>
                      <p
                        style={{
                          marginTop: "2%",
                          // fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        {e.Completingyear} | {e.towhichpursed}
                      </p>
                    </InnerComp>
                  </motion.div>
                );
              })}
            </MainFirst>
          </Firstpart>
          <Secondpart>
            <MainFirst>
              {li_es_2.map((e, i) => {
                var arr = e.Points ? e.Points : [];
                if (i != 2)
                  return (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                      style={{ width: "82%", height: "36%", display: "flex" }}
                    >
                      <div
                        style={{
                          width: "12%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                          // border: "1px solid black",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "3%",
                            background: "rgba(255,0,0,.2)",
                            borderRadius: "0px",
                          }}
                        ></div>
                        <Dot></Dot>
                      </div>
                      <InnerComp style={{ width: "88%" }} key={i}>
                        <h5
                          style={{
                            marginTop: "4%",
                            fontSize: "20px",
                            fontWeight: 500,
                          }}
                        >
                          {e.name}
                        </h5>
                        <p
                          style={{
                            marginTop: "2%",
                            // fontSize: "20px",
                            fontWeight: 500,
                          }}
                        >
                          {e.Completingyear} | {e.towhichpursed}
                        </p>
                        <div
                          style={{
                            width: "90%",
                            padding: "2px",
                            paddingTop: "5px",
                            overflow: "scroll",
                          }}
                        >
                          {arr.length != 0
                            ? arr.map((val, i) => {
                                return (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "start",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "40px",
                                        height: "10%",
                                        marginRight: "5px",
                                        lineHeight: "0px",
                                      }}
                                    >
                                      .
                                    </span>{" "}
                                    <Li>{val.val}</Li>
                                  </div>
                                );
                              })
                            : "bye"}
                        </div>
                      </InnerComp>
                    </motion.div>
                  );
                else {
                  return <div key={i} style={{ height: "22%" }}></div>;
                }
              })}
            </MainFirst>
          </Secondpart>
        </div>

        <div
          style={{
            width: "99.8%",
            minHeight: "560px",
            // border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            background: "white",
            alignItems: "center",
          }}
        >
          <motion.div ref={ref} id="INsideLast">
            {view && (
              <motion.div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 style={{ background: "transparent",width:"90%",textAlign:"center" ,marginTop:"10px",marginBottom:"20px"}}>
                  Coding <span>Skills</span>
                </h1>
                <div
                  style={{
                    width: "90%",
                    height: "95%",
                    minHeight: "100%",
                    // border: "1px solid red",
                    display:"flex",flexWrap:"wrap",alignItems:"center",
                    justifyContent:"center",
                  }}
                >
                 { list_3.map((e,i)=>{
                  return (
                    <div
                      style={{
                        width: "180px",
                        height: "180px",
                        // border: "1px solid black",
                        color: "black",
                        display: "flex",
                        marginLeft: "15px",
                        marginRight: "15px",
                        marginBottom: "20px",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <motion.div
                        whileHover={{
                          boxShadow: " 0px 0px 10px rgba(255,0,0,0.5)",
                          cursor: "pointer",
                          translateY: "-5px",
                        }}
                        animate={{
                          duration: 1,
                        }}
                        style={{
                          width: "100px",
                          minHeight: "100px",
                          // border: "3px solid white",
                          background: "rgba(255,255,255,0.3)",
                          border: "3px solid rgba(255,0,0,0.2)",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          fontWeight: 550,
                          alignItems: "center",
                        }}
                      >
                        {e.percentage}%
                      </motion.div>
                      <h2
                        style={{
                          height: "20px",
                          fontSize: "18px",
                          fontWeight: 450,
                          textAlign: "center",
                        }}
                      >
                        {e.name}
                      </h2>
                    </div>
                  );
                 })  
                  }
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Educ>
    </MotionConfig>
  );
}
