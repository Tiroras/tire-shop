import React from 'react'
import Link from "next/link";


const NavTiresList = () => {
  return(
    <span>
      <ul>
        <li>
          <Link href={"/catalog/tires"}><a><h3>Шины</h3></a></Link>
        </li>
        <li>
          <Link href={"/catalog/tires/agricultural-machine"}><a>Сельхозмашина</a></Link>
        </li>
        <li>
          <Link href={"/catalog/tires/truck-tires"}><a>Грузовая авторезина</a></Link>
        </li>
        <li>
          <Link href={"/catalog/tires/winter-tires"}><a>Зимняя авторезина</a></Link>
        </li>
        <li>
          <Link href={"/catalog/tires/summer-tires"}><a>Летняя авторезина</a></Link>
        </li>
        <li>
          <Link href={"/catalog/tires/quad-tires"}><a>Квадрошины</a></Link>
        </li>
      </ul>
    </span>
  )
}

export default NavTiresList;