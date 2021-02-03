import React from 'react';
import Link from "next/link";
import {LogLink, StyledTopHeader, TopHeaderLeftPart} from "./StyledTopHeader";
import HeaderCartContainer from "./header-cart/HeaderCart.container";
import styled from "styled-components";


const RightPart = styled.span`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

const TopHeader = () => {
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

        {/*<span className="log_in-out_links">*/}
        {/*  <LogLink>*/}
        {/*    <Link href="/login"><a>Войти</a></Link>*/}
        {/*  </LogLink>*/}

        {/*  <LogLink>*/}
        {/*    <Link href="/registration"><a>Регистрация</a></Link>*/}
        {/*  </LogLink>*/}
        {/*</span>*/}
      </RightPart>
    </StyledTopHeader>
  )
}

export default TopHeader;