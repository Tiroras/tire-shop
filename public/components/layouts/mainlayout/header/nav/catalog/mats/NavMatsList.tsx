import React from 'react'
import Link from "next/link";


const NavMatsList = () => {
  return(
    <span>
      <ul>
        <li>
          <Link href={"/catalog/mats"}><a><h3>Коврики</h3></a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/luggage-mats"}><a>Коврик багажный</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Коврики в салон</a></Link>
        </li>
      </ul>
    </span>
  )
}

export default NavMatsList;