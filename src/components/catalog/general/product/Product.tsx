import React from 'react';
import BuyButton from "./BuyButton";


interface IProps {
  name: string;
  price: number;
  img: string;
  inStock: boolean;
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

      {props.inStock && <BuyButton /> }
    </div>
  )
}

export default Product;