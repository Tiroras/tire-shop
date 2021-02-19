import React from 'react'
import Link from "next/link";
import {DropDownList, StyledA} from "../StylesNav";
import {ICatalog} from "../../../../../../../interfaces/reducers/INav";
import CatNavList from "./CatNavList";


interface IProps {
  catalog: ICatalog;
  className?: string;
}

const CatalogLink = (props: IProps) => {
  return(
    <DropDownList className={props.className}>
      <Link href={'/catalog'}>
        <StyledA className={props.className}>Каталог</StyledA>
      </Link>
      <div>
        <CatNavList data={props.catalog.tires}/>
        <CatNavList data={props.catalog.disks}/>
        <CatNavList data={props.catalog.mats}/>
        <CatNavList data={props.catalog.carGoods}/>
      </div>
    </DropDownList>
  )
}


export default CatalogLink;