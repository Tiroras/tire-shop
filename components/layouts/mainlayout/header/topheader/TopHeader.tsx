import React from 'react';
import Link from "next/link";
import {LogLink, StyledTopHeader, TopHeaderLeftPart} from "./StyledTopHeader";


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

        <span className="log_in-out_links">
          <LogLink>Войти</LogLink>

          <LogLink>Регистрация</LogLink>
        </span>
    </StyledTopHeader>
  )
}

export default TopHeader;