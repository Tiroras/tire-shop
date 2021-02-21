import React from 'react';
import Link from "next/link";
import classes from "./PopularDisks.module.css";


const PopularDisks = () => {
  return(
    <div className={classes.layout}>
      <h3>Популярные модели дисков</h3>
      <Link href={"/catalog/disks"}>
        <a>
          <img src={"images/disks/disks.jpg"}/>
        </a>
      </Link>
    </div>
  )
}

export default PopularDisks;