import React from 'react';
import TiresFormContainer from "../catalog/tires/form/TiresForm.container";
import DisksFormContainer from "../catalog/disks/form/DiskForm.container";
import SearchFeedBack from "./search-feedback/SearchFeedBack";
import PopularTires from "./popular-tires/PopularTires";
import PopularDisks from "./popular-disks/PopularDisks";
import Link from "next/link";
import classes from "./MainPage.module.css";


const MainPage = (props) => {
  return(
    <div className={classes.layout}>
      <div className={classes.block}>
        <div>
          <h1>Подберите для себя шины и диски</h1>
        </div>
        <div className={classes.forms}>
          <div className={classes.form}>
            <h3>Шины</h3>
            <TiresFormContainer />
          </div>
          <div className={classes.form}>
            <h3>Диски</h3>
            <DisksFormContainer />
          </div>
        </div>
      </div>
      <div className={classes.block}>
        <SearchFeedBack />
      </div>
      <div className={classes.block}>
        <PopularTires />
      </div>
      <div className={classes.block}>
        <PopularDisks />
      </div>
      <div className={`${classes.more} ${classes.block}`}>
        <h3>
          Адреса наших магазинов
        </h3>
        <div>
          <Link href={"/contacts"}><a>Подробнее</a></Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage;