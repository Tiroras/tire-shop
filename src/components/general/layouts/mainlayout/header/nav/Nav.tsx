import React from 'react'
import Link from "next/link";
import ServicesLink from "./services/ServicesLink";
import CatalogLinkContainer from "./catalog/CatalogLinkContainer";
import classes from "./Nav.module.css";


const Nav = () => {
  return(
    <nav className={classes.nav}>
      <Link href={'/'}>
        <a className={classes.link}>Главная</a>
      </Link>
      <CatalogLinkContainer />
      <ServicesLink />
      <Link href={'/news'}>
        <a className={classes.link}>Новости</a>
      </Link>
      <Link href={'/about-us'}>
        <a className={classes.link}>О нас</a>
      </Link>
      <Link href={'/contacts'}>
        <a className={classes.link}>Контакты</a>
      </Link>
    </nav>
  )
}

export default Nav;