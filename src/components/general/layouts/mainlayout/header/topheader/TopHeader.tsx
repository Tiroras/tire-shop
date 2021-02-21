import React from 'react';
import Link from "next/link";
import {StyledTopHeader, TopHeaderLeftPart} from "./StyledTopHeader";
import HeaderCartContainer from "./header-cart/HeaderCart.container";
import styled from "styled-components";


const Span = (props) => {
  return(
    <span className={props.className}>
      {props.children}
    </span>
  )
}

const RightPart = styled(Span)`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

const TopHeader = (props) => {
  return(
    <StyledTopHeader>
      <TopHeaderLeftPart>
        <Link href={'/'}>
          <a><h1>Салон Шива</h1></a>
        </Link>
        <span>
          Номер телефона
        </span>
      </TopHeaderLeftPart>
      <RightPart>
        <HeaderCartContainer />
      </RightPart>
    </StyledTopHeader>
  )
}

export default TopHeader;