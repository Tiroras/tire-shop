import React from 'react';
import CounterContainer from "../../general/counter/Counter.container";


interface IProps {
  name: string;
  img: string;
  price: number;
  totalPrice: number;
}

const CartItem = (props: IProps) => {
  return(
    <div>
      <span>
        <img src={props.img} />
      </span>

      <span>
        <span>
          <div>
            {props.name}
          </div>
          <div>
            {props.price} руб./шт
          </div>
        </span>

        <span>
          <CounterContainer />

          <span>{props.totalPrice}</span>
        </span>
      </span>
    </div>
  )
}

export default CartItem;