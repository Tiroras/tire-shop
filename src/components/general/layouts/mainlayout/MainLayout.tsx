import React from 'react'
import Header from "./header/Header";
import styled from "styled-components";


const StyledMain = styled.main`
  padding: 3vh 6vw;
`

const MainLayout = (props) => {
  return(
    <>
      <Header />
      <StyledMain className={props.className}>
        {props.children}
      </StyledMain>
    </>
  )
}

export default  MainLayout