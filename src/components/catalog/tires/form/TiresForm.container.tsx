import React from 'react';
import {connect} from "react-redux";
import {setInput} from "../../../../redux/forms/catalog-forms-reducer";
import TiresForm from "./TiresForm";


const TiresFormContainer = (props: any) => {
  let setInput = (formData) => {
    console.log(formData)
    //return props.setInput("tires", formData.name)
  }

  return(
    <TiresForm
      onSubmit={setInput}
    />
  )
}


export default connect(null, {setInput})(TiresFormContainer)