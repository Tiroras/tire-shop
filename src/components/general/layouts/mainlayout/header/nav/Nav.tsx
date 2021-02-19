import React from 'react'
import Link from "next/link";
import ServicesLink from "./services/ServicesLink";
import CatalogLinkContainer from "./catalog/CatalogLinkContainer";
import {StyledNav, StyledA} from "./StylesNav";


const Nav = (props) => {
  return(
    <StyledNav className={props.className}>
      <Link href={'/'}>
        <StyledA className={props.className}>Главная</StyledA>
      </Link>
      <CatalogLinkContainer />
      <ServicesLink />
      <Link href={'/news'}>
        <StyledA className={props.className}>Новости</StyledA>
      </Link>
      <Link href={'/about-us'}>
        <StyledA className={props.className}>О нас</StyledA>
      </Link>
      <Link href={'/contacts'}>
        <StyledA className={props.className}>Контакты</StyledA>
      </Link>
    </StyledNav>
  )
}


export default Nav;