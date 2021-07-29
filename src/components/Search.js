import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LinkContainer from "./LinkContainer";
import shrtcode from "../api/shrtcode";
function Search() {
  const HTTP_URL_VALIDATOR_REGEX =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  const [link, setLink] = useState("");
  const [short, setShort] = useState([]);
  const [old, setold] = useState([]);
  const [error, seterror] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (link.length > 0 && checkLink(link)) {
      console.log(link);
      setold((v) => [...v, link]);
      seterror(false);
      getLink(link);
      setLink("");
    } else {
      seterror(true);
    }
  };
  const getLink = async () => {
    await shrtcode
      .get(`shorten?url=${link}`)
      .then((response) => {
        console.log();
        setShort((v) => [...v, response.data.result.short_link]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Link Validation Function
  const checkLink = (string) => {
    // Regex to check if string is a valid URL
    return string.match(HTTP_URL_VALIDATOR_REGEX);
  };
  return (
    <Container>
      <SearchContainer>
        <input
          onSubmit={(e) => handleSubmit(e)}
          type="text"
          placeholder="Shorten a link here ..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        {error && <p className="error">Please add a link!</p>}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Shorten It!
        </button>
      </SearchContainer>
      {short && <LinkContainer shortlink={short} link={old} />}
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
  @media only screen and (max-width: 400px) {
    top: 10vh;
    min-height: 20vh;
    border-radius: 4px;
  }
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
    font-size: 2vw;
    &:focus {
      outline-color: #f46262;
      color: #f46262;
    }
    &::placeholder {
      color: #f46262;
      font-size: 2vw;
    }
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
  .error {
    position: absolute;
    color: #f46262;
    top: 9vw;
    left: 5.2vw;
    font-size: 2vw;
  }
  @media only screen and (max-width: 400px) {
    bottom: 4vh;
    min-height: 15vh;
    border-radius: 8px;
    input {
      width: 80%;
      height: 4vh;
      bottom: 3vh;
      border-radius: 8px;
      font-size: 2.4vh;
      &::placeholder {
        color: #bfbfbf;
        font-size: 2.4vh;
        padding-top: 2vh;
        padding-left: 2vh;
      }
    }
    button {
      width: 82%;
      left: 2.9vh;
      height: 5vh;
      border-radius: 6px;
      top: 8.2vh;
      text-align: center;
      font-size: 2.4vh;
      padding: 0;
    }
  }
`;
