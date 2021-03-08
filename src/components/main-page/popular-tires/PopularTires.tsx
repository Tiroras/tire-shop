import React from 'react';
import Link from "next/link";
import classes from "./PopularTires.module.css";


const PopularTires = () => {
  return (
    <div className={classes.layout}>
      <h3>Популярные модели шин</h3>
      <div className={classes.allTires}>
        <Link href={"/catalog/tires"}><a>Все шины</a></Link>
      </div>
      <div className={classes.types}>


        <div className={classes.block}>
          <Link href={"/catalog/tires"}>
            <a>
              <div className={classes.type}>
                <div>
                  Зимние шины
                </div>
                <div>
                  <img src={"images/tires/winter.jpg"}/>
                </div>
              </div>
            </a>
          </Link>
        </div>


        <div className={classes.block}>
          <Link href={"/catalog/tires"}>
            <a>
              <div className={classes.type}>
                <div>
                  Летние шины
                </div>
                <div>
                  <img src={"images/tires/summer.jpg"}/>
                </div>
              </div>
            </a>
          </Link>
        </div>


        <div className={classes.block}>
          <Link href={"/catalog/tires"}>
            <a>
              <div className={classes.type}>
                <div>
                  Грузовые шины
                </div>
                <div>
                  <img src={"images/tires/truck.jpeg"}/>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopularTires;