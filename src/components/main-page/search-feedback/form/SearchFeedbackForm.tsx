import React from 'react';
import {Input} from "../../../general/form/FormControls";
import {Field, reduxForm } from "redux-form";
import {required} from "../../../../utility/validators/validators";
import classes from "./SearchFeedbackForm.module.css"


const SearchFeedbackForm: React.FC = (props: any) => {
  return(
    <form
      className={classes.layout}
      onSubmit={props.handleSubmit} >
      <div>
        <Field
          component={Input}
          placeholder={"Введите ваше имя"}
          name={"name"}
          id={"name"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          placeholder={"Введие вашу почту"}
          name={"email"}
          id={"email"}
          validate={[required]}
        />
      </div>
      <div className={classes.agree}>
        <Field
          component={Input}
          type={"checkbox"}
          name={"agree"}
          id={"agree"}
          validate={[required]}
        />
        <label htmlFor={"agree"}>
          Я согласен на обработку персональных данных
        </label>
      </div>
      <div>
        <button className={classes.button}>Отправить</button>
      </div>
    </form>
  )
}

const SearchFeedbackReduxForm = reduxForm({form: "searchFeedbackForm"})(SearchFeedbackForm);

export default SearchFeedbackReduxForm;