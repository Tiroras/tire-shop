import React from 'react'
import Link from "next/link";
import {DropDownList, StyledA} from "../StylesNav";


const ServicesLink = () => {
  return(
    <DropDownList>
      <Link href={'/services'}>
        <StyledA>Услуги</StyledA>
      </Link>
      <div>
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
    </DropDownList>
  )
}

export default ServicesLink;