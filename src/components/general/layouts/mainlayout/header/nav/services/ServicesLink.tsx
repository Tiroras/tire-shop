import React from 'react'
import Link from "next/link";
import classes from "../Nav.module.css";


const ServicesLink = () => {
  return(
    <div className={classes.DropDownList}>
      <Link href={'/services'}>
        <a className={classes.link}>Услуги</a>
      </Link>
      <div className={classes.links}>
        <ul>
          <li>
            <Link href={"/services/season-storage"}><a>Сезонное хранение</a></Link>
          </li>
          <li>
            <Link href={"/services/disc-straightening"}><a>Правка дисков</a></Link>
          </li>
          <li>
            <Link href={"/services/tier-repair"}><a>Ремонт шин</a></Link>
          </li>
          <li>
            <Link href={"/services/tire-fitting"}><a>Шиномонтаж</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ServicesLink;