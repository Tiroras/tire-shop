import React, {useEffect, useState} from 'react';
import CartButton from "./CartButton";
import {useSelector} from "react-redux";
import {ReducerType} from "../../../../../redux/reducer";


const CartButtonContainer = () => {
  const [isHaveProducts, setHaveProducts] = useState<boolean>(false);
  const cart_items = useSelector((state: ReducerType) => state.cartData.cart.numbers);

  useEffect(() => {
    if(cart_items){
      setHaveProducts(true);
    }
    else{
      setHaveProducts(false);
    }
  })

  return(
    <CartButton
      isHaveProducts={isHaveProducts}
      amount={cart_items}
    />
  )
}

export default CartButtonContainer;