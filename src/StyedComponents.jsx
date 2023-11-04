import styled from "styled-components";

export var FirstCopy = styled.div`
  width: 100%;
  height: 100%;
  // border: 1px solid black;
  // background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export var Second = styled.div`
  width: 100%;
  height: 100%;
  //   border: 1px solid black;
  background: tranparent;
  backdrop-filter: blur(7px);
  display: flex;
//   justify-content: ;
    flex-direction:column;
  align-items: center;
  position: absolute;
`;

export var Header = styled.div`
  width: 90%;
  height: 50px;
  // position:sticky;
  margin-top: 20px;
  border-radius: 10px;
  // background:linear-gradient(to right, rgba(0,0,0,.4),white);
  // border:1px solid black;
//   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
`;
export var MainDiv = styled.div`
  width: 80%;
  height: 85%;
//   background: red;
background:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
  margin-top: 40px;
//   border:1px solid rgba(0,0,0,.1);
`;
export var Fcircle = styled.div`
  width: 400px;
  height: 400px;
  background: red;
  margin-top: -30%;
  margin-left: 5%;
  border-radius: 50%;
  box-shadow: 0 21px 42px -10px rgba(0, 0, 0, 0.2);
`;
// MainDiv;

export var Headings = styled.h4`
  font-size:19px;
  font-weight:450;
  padding-bottom:10px;
  cursor:pointer;
  padding-top:18px;
  transition:all .5s
  letter-spacing;1px;
//   border-bottom:2px solid black;
`;
export var Scircle = styled.div`
  width: 200px;
  height: 200px;
  margin-top: -0%;
  border-radius: 50%;
  margin-left: 10%;
  background: purple;
  box-shadow: 0 21px 42px -10px rgba(0, 0, 0, 0.2);
`;
export var Thcircle = styled.div`
  width: 500px;
  height: 500px;
  margin-top: -0%;
  border-radius: 50%;
  margin-left: 10%;
  box-shadow: 0 21px 42px -10px rgba(0,0,0,.2);

  background: pink;
`;
export var Focircle = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 20%;
  border-radius: 50%;
  margin-left: -10%;
  background: orange;
  box-shadow: 0 21px 42px -10px rgba(0, 0, 0, 0.2);
`;
