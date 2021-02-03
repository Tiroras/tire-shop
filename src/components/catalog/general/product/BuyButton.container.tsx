import React from 'react';
import BuyButton from "./BuyButton";


interface IProps {
  id: number;
  addToCart: (id: number) => void
}

const BuyButtonContainer = (props: IProps) => {
  const sendToCart = () => {
    return props.addToCart(props.id)
  }

  return(
    <BuyButton id={props.id} sendToCart={sendToCart} />
  )
}

export default BuyButtonContainer;