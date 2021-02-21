import React from 'react'
import Link from "next/link";
import {ICatalog} from "../../../../../../../interfaces/reducers/INav";
import CatNavList from "./CatNavList";
import classes from "../Nav.module.css";


interface IProps {
  catalog: ICatalog;
}

const CatalogLink = (props: IProps) => {
  return(
    <div className={classes.DropDownList}>
      <Link href={'/catalog'}>
        <a className={classes.link}>Каталог</a>
      </Link>
      <div className={classes.links}>
        <CatNavList data={props.catalog.tires}/>
        <CatNavList data={props.catalog.disks}/>
        <CatNavList data={props.catalog.mats}/>
        <CatNavList data={props.catalog.carGoods}/>
      </div>
    </div>
  )
}


export default CatalogLink;