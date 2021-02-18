import React from 'react';
import {connect} from "react-redux";
import DisksForm from "./DisksForm";
import {searchProductByName} from "../../../../redux/products/products-reducer";


const DisksFormContainer = (props) => {
  const handlerSubmit = (values) => {
    console.log(values)
    props.searchProductByName("disks", values)
    //return props.setInput("disks", formData.name)
  }

  return(
    <DisksForm
      onSubmit={handlerSubmit}
    />
  )
}

export default connect(null, {searchProductByName})(DisksFormContainer);