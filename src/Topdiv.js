import React from 'react'
import styled from "styled-components";
import github from "./github.svg";
import leetcode from "./leetcode.svg";
import hackerrank from "./hackerrank.svg";
var Top = styled.div`
  width: 100%;
  height: 50%;
  background: rgba(255, 0, 0, 0.2);
  display: flex;
  
`;
var TLeft = styled.div`
  width: 40%;
  height: 100%;
//   border: 1px solid rgba(255, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
var TRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   border: 1px solid rgba(255, 0, 0, 0.2);
  // display: flex;
`;
var ImageDiv = styled.div`
  width: 200px;
  height: 10%;
  display: flex;
  margin-bottom: -10%;
  margin-top: 5%;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid rgba(255, 0, 0, 0.2);
`;
var Image = styled.img`
  width: 40px;
  height: 40px;
  background: transparent;
  cursor:pointer;
  borderRadius:"50%;
`;
export default function Topdiv() {
  return (
    <>
      <Top>
        <TLeft>
          <div
            id="img_"
           
          ></div>
        </TLeft>
        <TRight>
          <h3 id="h_3">Hello User 👋 It's Ashad Mubeen</h3>
          <p id="p_">Programmer</p>
          <ImageDiv>
            <a href="https://leetcode.com/user6864ZZ/" target="_blank">
              <Image onClick={() => {}} src={leetcode} />
            </a>
            <a href="https://github.com/2732ii2/" target="_blank">
              {" "}
              <Image src={github} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/ashad_mubeen_cs1"
              target="_blank"
            >
              <Image src={hackerrank} />
            </a>
          </ImageDiv>
        </TRight>
      </Top>
    </>
  );
}
