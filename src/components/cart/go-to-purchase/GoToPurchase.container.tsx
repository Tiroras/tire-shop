import React from 'react';
import GoToPurchase from "./GoToPurchase";
import {connect} from "react-redux";


interface IProps {
  totalPrice: number;
}

const GoToPurchaseContainer = (props: IProps) => {
  return(
    <GoToPurchase totalPrice={props.totalPrice}/>
  )
}

const mapStateToProps = (state) => ({
  totalPrice: state.cartData.cart.totalPrice
});

export default connect(mapStateToProps)(GoToPurchaseContainer);