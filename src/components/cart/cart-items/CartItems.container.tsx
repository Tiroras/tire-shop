import React from 'react';
import CartItems from "./CartItems";
import ThereNothing from "../../general/ThereNothing";


const CartItemsContainer = (props) => {

  if(props.data === undefined || props.data.length === 0){
    return <ThereNothing />
  }
  return(
    <CartItems
      data={props.data}
    />
  )
}

export default CartItemsContainer;