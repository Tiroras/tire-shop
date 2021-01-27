import React from "react";
import Nav from "./nav/Nav";
import TopHeader from "./topheader/TopHeader";
import styled from "styled-components";

export const StyledHeader = styled.header`
  color: white;
`

const Header = () => {
  return(
    <StyledHeader>
      <TopHeader />
      <Nav />
    </StyledHeader>
  )
}

export default Header;