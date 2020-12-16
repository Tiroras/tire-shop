import React from 'react'
import Link from "next/link";


const NavCarGoodsList = () => {
  return(
    <span>
      <ul>
        <li>
          <Link href={"/catalog/car-goods"}><a><h3>Мотомасла</h3></a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/luggage-mats"}><a>Инструмент</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Аксессуары</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Тосол</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Ароматизаторы</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Щетки стеклоочистителя</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Автомасла</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Автоодеяло</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Автохимия</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Фильтра</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Датчики давления</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Защита двигателя</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Зап.части</a></Link>
        </li>
        <li>
          <Link href={"/catalog/mats/car-mats"}><a>Тормозные колодки</a></Link>
        </li>
      </ul>
    </span>
  )
}

export default NavCarGoodsList;