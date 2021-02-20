import React from 'react';
import {connect} from "react-redux";
import DisksForm from "./DisksForm";
import {searchProductByName} from "../../../../redux/products/products-reducer";


const DisksFormContainer = (props) => {
  const handlerSubmit = (values) => {
    console.log(values.diskName)
    props.searchProductByName("disks", values.diskName)
  }

  return(
    <DisksForm
      onSubmit={handlerSubmit}
    />
  )
}

export default connect(null, {searchProductByName})(DisksFormContainer);