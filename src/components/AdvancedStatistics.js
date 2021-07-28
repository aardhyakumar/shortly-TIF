import React from "react";
import styled from "styled-components";
function AdvancedStatistics() {
  return (
    <Container>
      <Statistics>
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with</p>
        <p>our advanced statistics dashboard</p>
      </Statistics>
      <InfoBox>
        <InfoBoxOne>
          <img src="/images/icon-brand-recognition.svg" />
          <h3>Brand Recognition</h3>
          <p>Boost your Brand Recognition with</p>
          <p>each click.Generic links don't mean a thing</p>
          <p>Branded links help instil</p>
          <p>confidence in your content</p>
        </InfoBoxOne>
        <InfoBoxTwo>
          <img src="/images/icon-detailed-records.svg" />
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your</p>
          <p>links.Knowing when and where</p>
          <p>people engage with your content</p>
          <p>helps inform better decisions</p>
        </InfoBoxTwo>
        <InfoBoxThree>
          <img src="/images/icon-fully-customizable.svg" />
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and</p>
          <p>content discoverability through</p>
          <p>customizable links,supercharging</p>
          <p>audience engagement.</p>
        </InfoBoxThree>
        <ConnectLine></ConnectLine>
      </InfoBox>
    </Container>
  );
}

export default AdvancedStatistics;
const Container = styled.div`
  position: relative;
  background-color: #f0f0f0;
  top: 30vh;
  left: 0;
  width: 100%;
  opacity: 1;
  color: white;
  right: 0;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;
const Statistics = styled.div`
  position: absolute;
  width: 60%;
  opacity: 1;
  color: white;
  right: 22%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  h1 {
    position: relative;
    top: 60px;
    font-size: 3.5vw;
    color: black;
  }
  p {
    position: relative;
    top: 70px;
    font-size: 1vw;
    color: #9e9aa7;
  }
`;

const InfoBox = styled.div`
  position: relative;
  width: 80%;
  opacity: 1;
  color: white;
  top: 20vw;
  height: 50vh;
  background-color: #f0f0f0;
`;
const InfoBoxOne = styled.div`
  position: absolute;
  width: 20%;
  opacity: 1;
  color: white;
  top: 0vh;
  left: 0vw;
  height: 35vh;
  width: 25vw;
  background-color: white;
  z-index: 1;
  img {
    position: relative;
    left: 1vw;
    bottom: 1.5vw;
    height: 2.5vw;
    padding: 12px;
    border-radius: 50px;
    background-color: #232127;
  }
  h3 {
    padding-left: 1vw;
    font-size: 1.6vw;
    margin-bottom: 1vw;
    color: black;
  }
  p {
    margin-bottom: 0.2vw;
    padding-left: 1vw;
    font-size: 1vw;
    color: #9e9aa7;
  }
`;
const InfoBoxTwo = styled.div`
  position: absolute;
  width: 20%;
  opacity: 1;
  color: white;
  top: 6vh;
  left: 27vw;
  height: 35vh;
  width: 25vw;
  background-color: white;
  z-index: 1;
  img {
    position: relative;
    left: 1vw;
    bottom: 1.5vw;
    height: 2.5vw;
    padding: 12px;
    border-radius: 50px;
    background-color: #232127;
  }
  h3 {
    padding-left: 1vw;
    font-size: 1.6vw;
    margin-bottom: 1vw;
    color: black;
  }
  p {
    margin-bottom: 0.2vw;
    padding-left: 1vw;
    font-size: 1vw;
    color: #9e9aa7;
  }
`;
const InfoBoxThree = styled.div`
  position: absolute;
  width: 20%;
  opacity: 1;
  color: white;
  top: 12vh;
  left: 55vw;
  height: 35vh;
  width: 25vw;
  background-color: white;
  z-index: 1;
  img {
    position: relative;
    left: 1vw;
    bottom: 1.5vw;
    height: 2.5vw;
    padding: 12px;
    border-radius: 50px;
    background-color: #232127;
  }
  h3 {
    padding-left: 1vw;
    font-size: 1.6vw;
    margin-bottom: 1vw;
    color: black;
  }
  p {
    margin-bottom: 0.2vw;
    padding-left: 1vw;
    font-size: 1vw;
    color: #9e9aa7;
  }
`;
const ConnectLine = styled.div`
  position: absolute;
  width: 80%;
  left: 12vw;
  opacity: 1;
  top: 22vh;
  color: white;
  height: 0.8vw;
  background-color: #2acfcf;
  z-index: 0;
`;
