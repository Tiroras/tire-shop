import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from "./Ordering.module.css"


const Ordering = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className={classes.layout}>
      <div className={classes.header}>
        Заполните информацию
      </div>
      <div className={classes.form}>
        <div>
          <Field
            component={"input"}
            placeholder={"Введите ваше имя"}
            name={"name"}
            id={"name"}
          />
        </div>
        <div>
          <Field
            component={"input"}
            placeholder={"Введите ваш номер телефона"}
            name={"number"}
            id={"number"}
            type={"tel"}
          />
        </div>
        <div>
          <Field
            component={"input"}
            placeholder={"Введите вашу почту"}
            name={"email"}
            id={"email"}
            type={"email"}
          />
        </div>
        <div>
          <button>
              Перейти к оплате
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({form: "ordering"})(Ordering)