import React from 'react';
import {connect} from "react-redux";
import TiresForm from "./TiresForm";
import {searchProductByName} from "../../../../redux/products/products-reducer";


const TiresFormContainer = (props) => {
  const handlerSubmit = (values) => {
    console.log(values.tireName)
    props.searchProductByName("tires", values.tireName)
  }

  return(
    <TiresForm
      onSubmit={handlerSubmit}
    />
  )
}


export default connect(null, {searchProductByName})(TiresFormContainer)