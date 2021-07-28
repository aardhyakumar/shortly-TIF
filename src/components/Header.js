import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg " alt="logo" />
      </Logo>
      <NavMenu>
        <a>
          <span>Features</span>
        </a>
        <a>
          <span>Pricing</span>
        </a>
        <a>
          <span>Resources</span>
        </a>
      </NavMenu>
      <SignUp>
        <strong>Login</strong>
      </SignUp>
      <Login>
        <strong>Sign Up</strong>
      </Login>
    </Container>
  );
}

export default Header;
const Container = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  color: white;
  right: 0;
  height: 70px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 12px;
  z-index: 1;
`;
const Logo = styled.a`
  margin: 30px;
  padding-left: 20px;
  padding-top: 20px;
  cursor: pointer;
  width: 80px;
  color: white;
  max-height: 140px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
  &:hover {
    opacity: 0.5;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  color: black;
  background-color:white;
  flex: 1;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-start;
  position: relative;
  a {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    span {
      font-size: 14px;
      font-weight: 500 !important;
      letter-spacing: .5px;
      color: #bfbfbf;
      line-height: 1.2;
      padding: 4px 0px;
      cursor: pointer;
      white-space: nowrap;
      position: relative;
      top:10px;
    }
    &:hover {
      span{
    color:black;
    transition:0.4s;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const SignUp = styled.a`
  top: 10px;
  padding: 8px 5px;
  display: flex;
  position: relative;
  right: 12vw;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700 !important;
  overflow: hidden;
  align-items: center;
  border-radius: 8px;
  color: #bfbfbf;
  cursor: pointer;
  &:hover {
    color: black;
    transition: 0.4s;
  }
`;
const Login = styled.a`
  top: 10px;
  padding: 10px 15px;
  display: flex;
  position: relative;
  right: 10vw;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700 !important;
  overflow: hidden;
  align-items: center;
  border-radius: 24px;
  background-color: #2acfcf;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: 0.4s;
    cursor: pointer;
  }
`;
