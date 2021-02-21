import React from 'react'
import Header from "./header/Header";
import styled from "styled-components";


const Main = (props) => {
  return(
    <main className={props.className}>
      {props.children}
    </main>
  )
}

const StyledMain = styled(Main)`
  padding: 3vh 6vw;
`

const MainLayout = (props) => {
  return(
    <>
      <Header />
      <StyledMain>
        {props.children}
      </StyledMain>
    </>
  )
}

export default  MainLayout