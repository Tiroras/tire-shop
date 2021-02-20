import React from 'react';
import {connect} from "react-redux";
import {setInput} from "../../../../redux/forms/catalog-forms-reducer";
import TiresForm from "./TiresForm";


const TiresFormContainer = (props: any) => {
  const handlerSubmit = (values) => {
    console.log(values.tiresNameName)
    props.searchProductByName("disks", values.tiresName)
  }

  return(
    <TiresForm
      onSubmit={handlerSubmit}
    />
  )
}


export default connect(null, {setInput})(TiresFormContainer)