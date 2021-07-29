import React from "react";
import { useState } from "react";
import styled from "styled-components";
function LinkContainer({ shortlink, link }) {
  const [copied, setcopied] = useState({});
  const copier = (index) => {
    setcopied({ [index]: true }); //set the new state
    navigator.clipboard.writeText(shortlink[index]);
  };
  return (
    <Content>
      {
        /* {shortlink.map((item) => {
        console.log(item, "itemobj");
        return (
          <Link>
            <h3>{item}</h3>
          </Link>
        );
      })} */

        shortlink.map((value, index) => {
          const linkContent = link[index];
          const copiedlink = copied[index];
          return (
            <Link>
              <h3 id="copy">{linkContent}</h3>
              <h4>{value}</h4>

              {copiedlink ? (
                <button className="button_active">Copied</button>
              ) : (
                <button
                  onClick={() => copier(index)}
                  data-clipboard-target="#copy"
                >
                  Copy
                </button>
              )}
            </Link>
          );
        })
      }
    </Content>
  );
}

export default LinkContainer;
const Link = styled.div`
  background-color: white;
  position: relative;
  width: 60%;
  right: 0;
  bottom: 0vh;
  opacity: 1;
  color: black;
  height: 70px;
  top: 0;
  left: 10vw;
  margin-bottom: 4vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 20%;
  z-index: 0;
  h3 {
    position: absolute;
    left: 3vw;
    color: #232127;
    opacity: 0.8;
  }
  h4 {
    position: absolute;
    right: 20vw;
    color: #2acfcf;
  }
  button {
    position: absolute;
    background-color: #2acfcf;
    border: none;
    padding: 10px 18px;
    color: white;
    border-radius: 8px;
    right: 3vw;
  }
  .button_active {
    position: absolute;
    background-color: #3b3054;
    border: none;
    padding: 10px 18px;
    color: white;
    border-radius: 8px;
    right: 3vw;
  }
  @media only screen and (max-width: 400px) {
    height: 160px;
    h3 {
      position: absolute;
      left: 2vh;
      top: 2vh;
      color: #232127;
      opacity: 0.8;
      font-size: 2vh;
    }
    h4 {
      font-size: 2vh;
      right: 25vh;
      bottom: 15vh;
    }
    button {
      width: 40vh;
      font-size: 1.5vh;
      top: 12vh;
      right: 2vh;
    }
  }
`;
const Content = styled.div`
  background-color: #f0f0f0;
  position: relative;
  width: 100%;
  right: 0;
  bottom: 0vh;
  margin: 10px;
  opacity: 1;
  color: black;
  min-height: 40vh;
  top: 0;
  overflow: hidden;
  z-index: 0;
  @media only screen and (max-width: 400px) {
    min-height: 20vh;
  }
`;
