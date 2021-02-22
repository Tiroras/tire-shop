import React from 'react';
import CartItem from "./CartItem";
import classes from "./CartItems.module.css";


interface IData{
  id: number;
  name: string;
  img: string;
  price: number;
  totalPrice: number;
}

interface IProps {
  data: IData[];
  clearCart: () => void;
  className?: string;
}

const CartItems = (props: IProps) => {
  return(
    <div className={classes.layout}>
      <div>
        {props.data.map((prop: IData) => (
          <CartItem
            key={prop.id}
            name={prop.name}
            img={prop.img}
            price={prop.price}
            totalPrice={prop.totalPrice}
          />
        ))}
      </div>
      <div>
        <button className={classes.button} onClick={props.clearCart}>
          Очистить корзину
        </button>
      </div>
    </div>
  )
}

export default CartItems;