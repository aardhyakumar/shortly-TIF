import React from "react";
import styled from "styled-components";
function LinkContainer() {
  return <Link></Link>;
}

export default LinkContainer;
const Link = styled.div`
  background-color: white;
  position: relative;
  width: 60%;
  right: 0;
  bottom: 0vh;
  margin: 10px;
  opacity: 1;
  color: white;
  height: 70px;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 20%;
  z-index: 0;
`;
