import React from 'react';
import BuyButtonContainer from "../product/BuyButton.container";
import classes from "./ListItem.module.css";


interface IProps {
  id: number;
  name: string;
  price: number;
  img: string;
  inStock: boolean;
  className?: string;
  addToCart: (id: number) => void;
}

const ListItem = (props: IProps) => {
  return(
    <div className={classes.layout}>
      <div className={classes.img}>
        <img src={props.img != null ? props.img : "/images/wheelImg.png"}/>
      </div>
      <div>
        {props.name}
      </div>
      <div className={classes.information}>
        <span>
          {props.price} руб.
        </span>
        <span>
          {props.inStock ? "В наличии" : "Нет в наличии"}
        </span>
      </div>
      <div className={classes.buy}>
        {props.inStock && <BuyButtonContainer id={props.id} addToCart={props.addToCart} />}
      </div>
    </div>
  )
}

export default ListItem;