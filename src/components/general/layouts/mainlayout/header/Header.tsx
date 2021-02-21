import React from "react";
import Nav from "./nav/Nav";
import TopHeader from "./topheader/TopHeader";
import styled from "styled-components";


const HeaderContainer = (props) => {
  return(
    <header className={props.className}>
      {props.children}
    </header>
  )
}

export const StyledHeader = styled(HeaderContainer)`
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