import React from 'react';
import {Field, reduxForm} from "redux-form";
import {IContacts} from "../../../interfaces/reducers/IContacts";
import {Input, Textarea} from "../../general/form/FormControls";
import classes from "./FeedBackForm.module.css";


interface IProps {
  data: IContacts
}

const FeedbackForm = () => {
  return(
    <form>
      <div className={classes.block}>
        <Field
          name={"email"}
          id={"email"}
          component={Input}
          type={"email"}
          placeholder={"Введите почту"}
        />
      </div>
      <div className={classes.block}>
        <Field
          name={"userName"}
          id={"userName"}
          component={Input}
          placeholder={"Введите имя"}
        />
      </div>
      <div className={classes.block}>
        <Field
          name={"number"}
          id={"number"}
          component={Input}
          placeholder={"Введите номер телефона"}
        />
      </div>
      <div className={classes.block}>
        <Field
          name={"message"}
          id={"message"}
          component={"textarea"}
          placeholder={"Введите сообщение"}
          className={classes.message}
        />
      </div>
      <div className={classes.block}>
        <button className={classes.button}>
          Отправить
        </button>
      </div>
    </form>
  )
}


const FeedbackReduxForm = reduxForm({form: "feedbackForm"})(FeedbackForm);

export default FeedbackReduxForm;