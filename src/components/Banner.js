import React from "react";
import styled from "styled-components";
function Banner() {
  return (
    <Container>
      <ContainerLeft>
        <h1>More than just</h1>
        <h1>shorter links</h1>
        <p>Build your Brand's Recognition and get detailed</p>
        <p>insights on how your links are performing </p>
      </ContainerLeft>
      <ContainerRight>
        <img src="/images/illustration-working.svg" alt="working" />
      </ContainerRight>
      <Button>
        <strong>Get Started</strong>
      </Button>
    </Container>
  );
}

export default Banner;
const Container = styled.div`
  position: relative;
  top: 70px;
  left: 0;
  width: 100%;
  overflow: hidden;
  color: white;
  right: 0;
  height: 70vh;
  display: flex;
  align-items: center;
  z-index: 0;
`;
const ContainerLeft = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  color: white;
  right: 0;
  height: 80vh;
  display: flex;
  margin: 30px;
  padding-left: 60px;
  flex-direction: column;
  align-items: left;
  z-index: 1;
  font-size: 1.75vw;
  h1 {
    position: relative;
    top: 25%;
    text-align: left;
    padding: 0;
    color: black;
  }
  p {
    position: relative;
    top: 28%;
    font-size: 1.2vw;
    color: #bfbfbf;
  }
`;
const ContainerRight = styled.div`
  position: absolute;
  left: 50%;
  width: 50%;
  color: white;
  right: 0;
  height: 80vh;
  display: flex;
  align-items: center;
  z-index: 1;
  img {
    position: relative;
    top: 2%;
    width: 100%;
    left: 20%;
  }
`;
const Button = styled.a`
  padding: 10px 15px;
  display: flex;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700 !important;
  overflow: hidden;
  position: relative;
  left: 90px;
  top: 22%;
  align-items: center;
  border-radius: 24px;
  background-color: #2acfcf;
  cursor: pointer;
  z-index: 2;
  &:hover {
    opacity: 0.6;
    transition: 0.4s;
    cursor: pointer;
  }
`;
