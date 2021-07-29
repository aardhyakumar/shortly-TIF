import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Container>
      <FooterImg>
        <img src="/images/logo.svg " alt="logo" />
      </FooterImg>
      <FooterInfo>
        <InfoRow>
          <h4>Features</h4>
          <h5>Link Shortening</h5>
          <h5>Branded links</h5>
          <h5>Analytics</h5>
        </InfoRow>
        <InfoRow>
          <h4>Resources</h4>
          <h5>Blog</h5>
          <h5>Developers</h5>
          <h5>Support</h5>
        </InfoRow>
        <InfoRow>
          <h4>Company</h4>
          <h5>About</h5>
          <h5>Our Team</h5>
          <h5>Resources</h5>
          <h5>Contact</h5>
        </InfoRow>
      </FooterInfo>
      <FooterPhotos>
        <FooterIcon>
          <img src="/images/icon-facebook.svg" className="first_img" />
          <img src="/images/icon-pinterest.svg" />
          <img src="/images/icon-twitter.svg" />
          <img src="/images/icon-instagram.svg" />
        </FooterIcon>
      </FooterPhotos>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  position: relative;
  top: 30vh;
  width: 100%;
  overflow: hidden;
  color: white;
  height: 35vh;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: #232127;
  @media only screen and (max-width: 400px) {
    top: 0;
    height: 145vh;
  }
`;
const FooterImg = styled.div`
  position: absolute;
  color: white;
  height: 35vh;
  width: 25vw;
  display: flex;
  flex: 1;
  align-items: center;
  z-index: 1;
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
    position: relative;
    bottom: 10vh;
    left: 10vw;
    height: 2vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
    img {
      width: 30vw;
      height: 5vh;
      left: 16vh;
      bottom: 65vh;
    }
  }
`;
const FooterInfo = styled.div`
  position: absolute;
  color: white;
  height: 35vh;
  width: 50vw;
  display: flex;
  flex: 1;
  left: 25vw;
  align-items: center;
  z-index: 1;
  @media only screen and (max-width: 400px) {
    width: 100vw;
    height: 90vh;
    flex-direction: column;
  }
`;
const InfoRow = styled.div`
  position: relative;
  color: blue;
  height: 35vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  flex: 0.35;
  z-index: 1;
  h4 {
    padding-top: 3.5vh;
    padding-left: 3.5vh;
    margin-top: 2.5vh;
    margin-bottom: 2vh;
    color: white;
  }
  h5 {
    padding-left: 4vh;
    margin-top: 1.4vh;
    color: #bfbfbf;
    &:hover {
      color: #2acfcf;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 400px) {
    top: -12vh;
    right: 15vh;
    h4 {
      padding: 0;
    }
    h5 {
      text-align: center;
      padding: 0;
    }
  }
`;
const FooterPhotos = styled.div`
  position: absolute;
  color: white;
  height: 35vh;
  width: 25vw;
  display: flex;
  flex: 1;
  left: 75vw;
  align-items: center;
  z-index: 0;
  background-color: #232127;
`;
const FooterIcon = styled.div`
  position: absolute;
  color: white;
  height: 15vh;
  width: 25vw;
  display: flex;
  flex: 1;
  bottom: 20vh;
  z-index: 1;
  .first_img {
    height: 2vw;
    margin-top: 3.5vh;
    padding-top: 1.8vw;
    padding-left: 2vw;
  }
  img {
    height: 2vw;
    margin-top: 3.5vh;
    padding-top: 1.8vw;
    padding-left: 0.8vw;
    &:hover {
      filter: invert(70%) sepia(15%) saturate(2068%) hue-rotate(130deg)
        brightness(250%) contrast(79%);
    }
  }
  @media only screen and (max-width: 400px) {
    bottom: 0;
    top: 50vh;
    right: 24vh;
    img {
      height: 3vh;
      padding-right: 1vh;
    }
    .first_img {
      height: 3vh;
      padding-right: 1vh;
    }
  }
`;
