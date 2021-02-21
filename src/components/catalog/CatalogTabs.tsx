import React from 'react';
import Link from "next/link";
import {ICatalog} from "../../interfaces/reducers/INav";
import classes from "./CatalogTabs.module.css";


interface IProps {
  data: ICatalog;
  className?: string;
}

const CatalogTabs = (props: IProps) => {
  return(
    <div className={classes.tabs}>
      <Link href={props.data.tires.sectionLink}>
        <a>
          <div className={classes.tab}>{props.data.tires.sectionName}</div>
        </a>
      </Link>
      <Link href={props.data.disks.sectionLink}>
        <a>
          <div className={classes.tab}>{props.data.disks.sectionName}</div>
        </a>
      </Link>
      <Link href={props.data.mats.sectionLink}>
        <a>
          <div className={classes.tab}>{props.data.mats.sectionName}</div>
        </a>
      </Link>
      <Link href={props.data.carGoods.sectionLink}>
        <a>
          <div className={classes.tab}>{props.data.carGoods.sectionName}</div>
        </a>
      </Link>
    </div>
  )
}

export default CatalogTabs;