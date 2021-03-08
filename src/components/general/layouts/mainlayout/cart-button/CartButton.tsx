import Link from 'next/link';
import React from 'react';
import classes from "./CartButton.module.css";


interface IProps {
  isHaveProducts: boolean;
  amount: number;
}

const CartButton = (props: IProps) => {
  return (
    <div className={props.isHaveProducts ? classes.active : classes.inactive}>
      <Link href={"/cart"}>
        <a>
          <div className={classes.layout}>
            <img src={"./images/cart.png"}/>
            <div className={classes.amount}>
              {props.amount}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default React.memo(CartButton);