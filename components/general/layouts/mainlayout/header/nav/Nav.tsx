import React from 'react'
import Link from "next/link";
import {StyledA, StyledNav} from "./StylesNav";
import ServicesLink from "./services/ServicesLink";
import CatalogLinkContainer from "./catalog/CatalogLinkContainer";


const Nav = () => {
  return(
    <StyledNav>
      <Link href={'/'}>
        <StyledA>Главная</StyledA>
      </Link>

      <CatalogLinkContainer />

      <ServicesLink />

      <Link href={'/news'}>
        <StyledA>Новости</StyledA>
      </Link>
      <Link href={'/about-us'}>
        <StyledA>О нас</StyledA>
      </Link>
      <Link href={'/contacts'}>
        <StyledA>Контакты</StyledA>
      </Link>
    </StyledNav>
  )
}


export default Nav;