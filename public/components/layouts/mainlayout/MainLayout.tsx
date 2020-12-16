import React from 'react'
import Header from "./header/Header";
import styled from "styled-components";


const StyledMain = styled.main`
  padding: 3vh 6vw;
`

const MainLayout = ({children}: any) => {
  return(
    <>
      <Header />

      <StyledMain>
        {children}
      </StyledMain>
    </>
  )
}

export default  MainLayout