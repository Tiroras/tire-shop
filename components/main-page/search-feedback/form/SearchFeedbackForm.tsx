import React from 'react';
import Field from "redux-form";
import {Input} from "../../../general/form/FormControls";


const SearchFeedbackForm = () => {
  return(
    <form>
      <Field
        component={Input}
        placeholder={"Ваше имя"}
        name={"name"}
      />
    </form>
  )
}

export default SearchFeedbackForm;