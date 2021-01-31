import React from 'react';
import HeaderCart from "./HeaderCart";
import {connect} from "react-redux";


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