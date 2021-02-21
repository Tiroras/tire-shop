import React from 'react';
import Link from "next/link";
import classes from "./PopularTires.module.css";


const PopularTires = () => {
  return(
    <div className={classes.layout}>
      <h3>Популярные модели шин</h3>
      <div className={classes.allTires}>
        <Link href={"/catalog/tires"}><a>Все шины</a></Link>
      </div>
      <div className={classes.types}>
        <span className={classes.type}>
          <Link href={"/catalog/tires"}><a>Зимние шины</a></Link>
          <img src={"images/tires/winter.jpg"} />
        </span>
        <span className={classes.type}>
          <Link href={"/catalog/tires"}><a>Летние шины</a></Link>
          <img src={"images/tires/summer.jpg"} />
        </span>
        <span className={classes.type}>
          <Link href={"/catalog/tires"}><a>Грузовые шины</a></Link>
          <img src={"images/tires/truck.jpeg"} />
        </span>
      </div>
    </div>
  )
}

export default PopularTires;