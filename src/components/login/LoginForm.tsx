import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../general/form/FormControls";
import {required} from "../../utility/validators/validators";


const LoginForm = () => {
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
          validate={[required]}
        />
      </div>
      <div className="checkbox">
        <Field
          name="rememberMe"
          id="rememberMe"
          component={Input}
          type="checkbox"
        />
        <label htmlFor={"rememberMe"}>Запомнить меня</label>
      </div>
      <button>Отправить</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default LoginReduxForm;