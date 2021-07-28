import React from "react";
import styled from "styled-components";
import LinkContainer from "./LinkContainer";

function Search() {
  return (
    <Container>
      <SearchContainer>
        <input type="text" placeholder="Shorten a link here ..." />
        <button type="submit">Shorten It!</button>
      </SearchContainer>
      <LinkContainer />
    </Container>
  );
}

export default Search;
const Container = styled.div`
  position: relative;
  background-color: #f0f0f0;
  top: 30vh;
  left: 0;
  width: 100%;
  opacity: 1;
  color: white;
  right: 0;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;
const SearchContainer = styled.div`
  position: relative;
  background: url("/images/bg-shorten-desktop.svg"), #3b3054;
  left: 0vw;
  opacity: 1;
  height: 12vw;
  border-radius: 12px;
  top: -6vw;
  width: 80%;
  color: white;
  right: 0;
  bottom: 18vh;
  display: flex;
  margin-bottom: 0;
  align-items: center;
  z-index: 1;
  input {
    position: relative;
    left: 5vw;
    height: 3vw;
    width: 50vw;
    padding: 1vw;
    border-radius: 8px;
  }
  button {
    position: absolute;
    left: 62vw;
    right: 1vw;
    padding: 10px 0.8vw;
    width: 12vw;
    margin-left: 2px;
    border-radius: 8px;
    background-color: #2acfcf;
    font-size: 1.75vw;
    color: white;
    border: none;
    &:hover {
      opacity: 0.7;
      filter: brightness(110%);
      cursor: pointer;
      transition: 0.4s;
    }
  }
`;
