import React from 'react';
import Link from "next/link";
import classes from "./GoToPurchase.module.css";


interface IProps {
  totalPrice: number;
  className?: string;
}

const GoToPurchase = (props: IProps) => {
  return(
    <div className={classes.layout}>
      <span className={classes.totalPrice}>
        Итоговая стоимость: {props.totalPrice} руб.
      </span>
      {props.totalPrice ?
        <Link href={"/cart/ordering"}>
          <a>
            <button className={classes.link}>Оформить заказ</button>
          </a>
        </Link>
        :
        <button className={classes.link}>Положите что-нибудь в корзину</button>
      }
    </div>
  )
}

export default GoToPurchase;