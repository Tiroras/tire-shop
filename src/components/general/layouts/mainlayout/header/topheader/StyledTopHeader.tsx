import React from 'react';
import styled from "styled-components";


const Span = (props) => {
  return(
    <span className={props.className}>
      {props.children}
    </span>
  )
}

export const StyledTopHeader = styled(Span)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 2vw;
  
  background-color: #0a64a4;
`;

export const TopHeaderLeftPart = styled(Span)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  
  width: 25%;
`;

export const LogLink = styled(Span)`
  margin: 0 1vw;
`;