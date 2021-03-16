import React from "react";
import Nav from "./nav/Nav";
import classes from "./Header.module.css";
import TopHeaderContainer from "./topheader/header-cart/TopHeader.container";



const Header = () => {
  return(
    <header className={classes.header}>
      <TopHeaderContainer />
      <Nav />
    </header>
  )
}

export default React.memo(Header);