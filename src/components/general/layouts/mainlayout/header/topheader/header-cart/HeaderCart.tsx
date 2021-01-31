import React from 'react';
import Link from "next/link";


interface IProps {
  numbers: number | null;
}

const HeaderCart = (props: IProps) => {
  return(
    <Link href={"/cart"}>
      <a>
        <span>Корзина {props.numbers && `(${props.numbers})`}</span>
      </a>
    </Link>
  )
}

export default HeaderCart;
