import React from 'react';
import CartItems from "./CartItems";
import ThereNothing from "../../general/ThereNothing";
import {connect} from "react-redux";
import {clearCart} from "../../../redux/products/cart-reducer";
import {IDisk, IProduct, ITire} from "../../../interfaces/catalog/IProducts.type";


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
}

const CartItemsContainer = (props: IProps) => {
  if(props.data === undefined || props.data.length === 0){
    return <ThereNothing />
  }
  return(
    <CartItems
      data={props.data}
      clearCart={props.clearCart}
    />
  )
}

const mapStateToProps = (state) => ({
  data: state.cartData.cart.products,
})

export default connect(mapStateToProps, {clearCart})(CartItemsContainer);