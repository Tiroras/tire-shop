import React from 'react'
import Header from "./header/Header";
import classes from "./MainLayout.module.css"
import CartButtonContainer from "./cart-button/CartButton.container";


const MainLayout = (props) => {
  return(
    <>
      <Header />
      <main className={classes.layout}>
        {props.children}
      </main>
      <CartButtonContainer />
    </>
  )
}

export default  MainLayout