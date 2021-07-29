import React from "react";
import styled from "styled-components";
function Booster() {
  return (
    <Container>
      <h1>Boost your links today </h1>
      <Button>
        <p>
          <strong>Get Started</strong>
        </p>
      </Button>
    </Container>
  );
}

export default Booster;
const Container = styled.div`
  position: relative;
  top: 30vh;
  width: 100%;
  overflow: hidden;
  color: white;
  height: 32vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  background: url("/images/bg-boost-desktop.svg"), #3b3054;
  h1 {
    position: absolute;
    top: 5vh;
  }
  @media only screen and (max-width: 400px) {
    top: 0vh;
    h1 {
      top: 8vh;
      font-size: 4vh;
    }
  }
`;
const Button = styled.a`
  padding: 15px 1vh;
  letter-spacing: 1px;
  font-size: 1.5vw;
  margin-bottom: 0px;
  font-weight: 700 !important;
  overflow: hidden;
  position: relative;
  top: 18vh;
  height: 2vw;
  width: 12vw;
  text-align: center;
  border-radius: 32px;
  background-color: #2acfcf;
  cursor: pointer;
  z-index: 2;
  p {
    position: absolute;
    bottom: 2vh;
    left: 1.5vw;
  }
  &:hover {
    opacity: 0.6;
    transition: 0.4s;
    cursor: pointer;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1.8vh;
    padding-top: 3vh;
    width: 12vh;
    p {
      text-align: center;
    }
  }
`;
