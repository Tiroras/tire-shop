import React from 'react';
import Link from "next/link";
import {StyledTopHeader, TopHeaderLeftPart} from "./StyledTopHeader";
import HeaderCartContainer from "./header-cart/HeaderCart.container";
import styled from "styled-components";


const RightPart = styled.span`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

const TopHeader = (props) => {
  return(
    <StyledTopHeader className={props.className}>
      <TopHeaderLeftPart className={props.className}>
        <Link href={'/'}>
          <a><h1>Салон Шива</h1></a>
        </Link>

        <span>
          Номер телефона
        </span>
      </TopHeaderLeftPart>

      <RightPart className={props.className}>
        <HeaderCartContainer />
      </RightPart>
    </StyledTopHeader>
  )
}

export default TopHeader;