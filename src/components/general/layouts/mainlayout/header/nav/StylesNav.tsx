import React from 'react';
import styled from "styled-components";


const Nav = (props) => {
  return(
    <nav className={props.className}>
      {props.children}
    </nav>
  )
}

const A = (props) => {
  return(
    <a className={props.className}>
      {props.children}
    </a>
  )
}

const Div = (props) => {
  return(
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  position: sticky;
  
  padding: 0vh 4vw;
  
  font-size: 2.5vh;
  
  background-color: #3e94d1;
  
  border-top: 3px solid #a9a9a9;
  border-bottom: none;
`;

export const StyledA = styled(A)`
  padding: 2vh 5vw;
  :hover{
    background-color: #ff9540;
    transition: 0.25s;
  }
  :not(:hover){
    transition: 1s;
  }
`;

export const DropDownList = styled(Div)`
  :hover div{
    display: flex;
    align-items: baseline;
    z-index: 1000;
  }
  div{
    display: none;
    opacity: 0.8;
    position: absolute;
    background-color: #3E94D1;
    padding: 1vh 2vw;
    margin: 2vh 0;
  }
  ul{
    list-style: none;
  }
  li :hover{
    background-color: #ff9540;
  }
`;