import React from 'react'
import Header from "./header/Header";
import classes from "MainLayout.module.css";


const MainLayout = (props) => {
  return(
    <>
      <Header />
      <main className={classes.layout}>
        {props.children}
      </main>
    </>
  )
}

export default  MainLayout