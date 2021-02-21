import React from 'react';
import Link from "next/link";
import HeaderCartContainer from "./header-cart/HeaderCart.container";
import classes from "./TopHeader.module.css";


const TopHeader = () => {
  return(
    <span className={classes.layout}>
      <span className={classes.left}>
        <Link href={'/'}>
          <a><h1>Салон Шива</h1></a>
        </Link>
        <span>
          Номер телефона
        </span>
      </span>
      <span className={classes.right}>
        <HeaderCartContainer />
      </span>
    </span>
  )
}

export default TopHeader;