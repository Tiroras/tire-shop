import React from 'react';
import Ordering from "./Ordering";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../../redux/products/cart-reducer";
import {orderAPI} from "../../../api/api";
import {ReducerType} from "../../../redux/reducer";
import {useRouter} from "next/router";


const OrderingContainer = () => {
  const order = useSelector((state: ReducerType) => state.cartData.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = () => {
    orderAPI.postOrder(order);
    dispatch(clearCart());
    router.push("/");
  }

  return(
    <Ordering
      onSubmit={handleSubmit}
    />
  )
}

export default OrderingContainer;