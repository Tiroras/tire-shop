import React from "react";
import Nav from "./nav/Nav";
import TopHeader from "./topheader/TopHeader";
import classes from "./Header.module.css";



const Header = () => {
  return(
    <header className={classes.header}>
      <TopHeader />
      <Nav />
    </header>
  )
}

export default React.memo(Header);