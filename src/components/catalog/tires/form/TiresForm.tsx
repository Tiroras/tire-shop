import React from 'react';
import {reduxForm, Field} from "redux-form";
import {maxLengthCreator} from "../../../../utility/validators/validators";
import classes from "./TiresForm.module.css";


const MaxLength = maxLengthCreator(40);

const TiresForm = (props) => {
  return(
    <form className={classes.form}
      onSubmit={props.handleSubmit}
      >
      <Field
        name={"tireName"}
        id={"tireName"}
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

export default reduxForm({form: "tiresSearch"})(TiresForm);