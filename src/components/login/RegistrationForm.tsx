import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../general/form/FormControls";
import {required} from "../../utility/validators/validators";


const RegistrationForm = () => {
  return(
    <form>
      <div>
        <Field
          name="login"
          id="login"
          component={Input}
          placeholder="Введите логин"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="password"
          id="password"
          component={Input}
          placeholder="Введите пароль"
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="confirmPassword"
          id="confirmPassword"
          component={Input}
          placeholder="Введите пароль ещё раз"
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="email"
          id="email"
          component={Input}
          placeholder="Введите почту"
          type="email"
          validate={[required]}
        />
      </div>
      <div className="checkbox">
        <Field
          name="agree"
          id="agree"
          component={Input}
          type="checkbox"
          validate={[required]}
        />
        <label htmlFor={"agree"}>Я соглашаюсь с пользовательским соглашением</label>
      </div>
      <button>Отправить</button>
    </form>
  )
}

const RegistrationReduxForm = reduxForm({form: "registration"})(RegistrationForm)

export default RegistrationReduxForm;

