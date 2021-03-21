import React from 'react';
import Ordering from "./Ordering";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../../redux/products/cart-reducer";
import {orderAPI} from "../../../api/api";
import {ReducerType} from "../../../redux/reducer";
import {useRouter} from "next/router";


const OrderingContainer = () => {
  const productsID: Array<number> = useSelector((state: ReducerType) => state.cartData.cart.productsID);
  const quantity: number = useSelector((state: ReducerType) => state.cartData.cart.numbers);
  const totalPrice: number = useSelector((state: ReducerType) => state.cartData.cart.totalPrice);
  const dispatch = useDispatch();
  const router = useRouter();

  const products = productsID.toString();

  const handleSubmit = (values) => {
    orderAPI.postOrder({
      name: values.name,
      number: values.number,
      email: values.email,
      products,
      quantity,
      totalPrice
    });
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