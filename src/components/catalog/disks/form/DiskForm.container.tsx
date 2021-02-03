import React from 'react';
import {connect} from "react-redux";
import {setInput} from "../../../../redux/forms/catalog-forms-reducer";
import DisksForm from "./DisksForm";
import {searchProductByName} from "../../../../redux/products/products-reducer";


const DisksFormContainer = (props) => {
  let onSubmit = (formData) => {
    console.log(formData)
    props.searchProductByName("disks", formData.name)
    //return props.setInput("disks", formData.name)
  }

  return(
    <DisksForm
      onSubmit={onSubmit}
    />
  )
}

export default connect(null, {searchProductByName})(DisksFormContainer);