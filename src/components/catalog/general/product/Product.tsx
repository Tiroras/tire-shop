import React from 'react';
import BuyButton from "./BuyButton";


interface IProps {
  id: number;
  name: string;
  price: number;
  img: string;
  inStock: boolean;
  sendToCart: () => any;
}

const Product = (props: IProps) => {
  return(
    <div>

      <div>
        <img src={props.img != null ? props.img : "/wheelImg.png"}/>
      </div>
      <div>
        {props.name}
      </div>


      <div>
        <span>
          {props.price} руб.
        </span>
        <span>
          {props.inStock ? "В наличии" : "Нет в наличии"}
        </span>
      </div>

      {props.inStock && <BuyButton id={props.id} sendToCart={props.sendToCart} /> }
    </div>
  )
}

export default Product;