import React from 'react'
import {reduxForm, Field} from "redux-form";
import {maxLengthCreator} from "../../../../utility/validators/validators";
import classes from "./DisksForm.module.css";

const MaxLength = maxLengthCreator(40);

const DisksForm = (props) => {
  return(
    <form className={classes.form}
      onSubmit={props.handleSubmit}
    >
      <Field
        name={"diskName"}
        id={"diskName"}
        component={"input"}
        placeholder={"Поиск"}
        validate={[MaxLength]}
      />
      <button>
        Найти
      </button>
    </form>
  )
}

export default reduxForm({form: "disksSearch"})(DisksForm);