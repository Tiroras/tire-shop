import React, {useEffect} from 'react';
import HeaderCart from "./HeaderCart";
import {connect} from "react-redux";
import {setNumbersAC} from "../../../../../../../redux/products/cart-reducer";


interface IProps {
  numbers: number | null;
}

const HeaderCartContainer = (props: IProps) => {
  return(
    <HeaderCart numbers={props.numbers} />
  )
}

const mapStateToProps = (state) => ({
  numbers: state.cartData.cart.numbers
})

export default connect(mapStateToProps)(HeaderCartContainer);