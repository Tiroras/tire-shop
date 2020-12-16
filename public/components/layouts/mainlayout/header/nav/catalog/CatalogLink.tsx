import React from 'react'
import Link from "next/link";
import {DropDownList, StyledA} from "../StylesNav";
import NavTiresList from "./tires/NavTiresList";
import NavDisksList from "./disks/NavDisksList";
import NavMatsList from "./mats/NavMatsList";
import NavCarGoodsList from "./cargoods/NavCarGoodsList";


const CatalogLink = () => {
  return(
    <DropDownList>
      <Link href={'/catalog'}>
        <StyledA>Контакты</StyledA>
      </Link>
      <div>
        <NavTiresList />
        <NavDisksList />
        <NavMatsList />
        <NavCarGoodsList />
      </div>
    </DropDownList>
  )
}

export default CatalogLink;