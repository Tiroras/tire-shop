import React from 'react'
import Link from "next/link";
import classes from "./Services.module.css";


const ServicesComponent = () => {
  return(
    <div className={classes.layout}>
      <Link href={"/services/season-storage"}>
        <a>
          <div className={classes.block}>Сезонное хранение</div>
        </a>
      </Link>
      <Link href={"/services/disc-straightening"}>
        <a>
          <div className={classes.block}>Правка дисков</div>
        </a>
      </Link>
      <Link href={"/services/tier-repair"}>
        <a>
          <div className={classes.block}>Ремонт шин</div>
        </a>
      </Link>
      <Link href={"/services/tire-fitting"}>
        <a>
          <div className={classes.block}>Шиномонтаж</div>
        </a>
      </Link>
    </div>
  )
}

export default ServicesComponent;